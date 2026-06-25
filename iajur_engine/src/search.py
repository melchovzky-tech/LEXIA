import json
from pathlib import Path
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


BASE_DIR = Path(__file__).resolve().parent.parent
CORPUS_FILE = BASE_DIR / "data" / "index" / "corpus.json"
LEGAL_SEED_FILE = BASE_DIR / "data" / "index" / "legal_seed.json"
JURISPRUDENCE_SEED_FILE = BASE_DIR / "data" / "index" / "jurisprudence_seed.json"


class LegalSearchEngine:
    def __init__(self):
        self.documents = []
        self.vectorizer = None
        self.matrix = None
        self.load_corpus()

    def load_json_documents(self, path: Path):
        if not path.exists():
            return []

        try:
            with open(path, "r", encoding="utf-8") as file:
                documents = json.load(file)
        except (OSError, json.JSONDecodeError):
            return []

        if not isinstance(documents, list):
            return []

        return [
            document
            for document in documents
            if (
                isinstance(document, dict)
                and isinstance(document.get("text"), str)
                and document["text"].strip()
            )
        ]

    def normalize_document(self, document: dict, fallback_index: int):
        return {
            "source_file": document.get("source_file") or f"legal_seed_{fallback_index}",
            "source_name": document.get("source_name") or document.get("source_file") or "Biblioteca LEX-IA",
            "category": document.get("category") or "general",
            "source_type": document.get("source_type") or "normativa",
            "jurisdiction": document.get("jurisdiction") or "mx",
            "page": document.get("page", 0),
            "chunk_id": document.get("chunk_id") or f"chunk_{fallback_index}",
            "legal_references": document.get("legal_references", []),
            "text": document["text"].strip()
        }

    def load_corpus(self):
        self.documents = []
        self.vectorizer = None
        self.matrix = None

        documents = self.load_json_documents(CORPUS_FILE)
        documents.extend(self.load_json_documents(LEGAL_SEED_FILE))
        documents.extend(self.load_json_documents(JURISPRUDENCE_SEED_FILE))

        if not documents:
            return False

        documents = [
            self.normalize_document(document, index)
            for index, document in enumerate(documents)
        ]

        texts = [document["text"] for document in documents]

        self.vectorizer = TfidfVectorizer(
            lowercase=True,
            stop_words=None,
            ngram_range=(1, 2)
        )

        try:
            self.matrix = self.vectorizer.fit_transform(texts)
        except ValueError:
            self.vectorizer = None
            return False

        self.documents = documents
        return True

    def search(self, query: str, top_k: int = 5, rama: str | None = None, incluir_doctrina: bool = True):
        if not query.strip() or self.vectorizer is None or self.matrix is None:
            return []

        query_vector = self.vectorizer.transform([query])
        similarities = cosine_similarity(query_vector, self.matrix).flatten()

        ranked_indexes = similarities.argsort()[::-1]

        results = []
        rama_normalizada = rama.lower().strip() if rama else None

        for index in ranked_indexes:
            score = float(similarities[index])

            if score <= 0:
                continue

            doc = self.documents[index]
            category = doc.get("category", "").lower()
            source_type = doc.get("source_type", "normativa")

            if rama_normalizada and category != rama_normalizada:
                if not (incluir_doctrina and source_type == "doctrina"):
                    continue

            if not incluir_doctrina and source_type == "doctrina":
                continue

            results.append({
                "score": round(score, 4),
                "source_file": doc["source_file"],
                "source_name": doc.get("source_name", doc["source_file"]),
                "category": doc["category"],
                "source_type": source_type,
                "jurisdiction": doc.get("jurisdiction", "mx"),
                "page": doc["page"],
                "chunk_id": doc["chunk_id"],
                "legal_references": doc.get("legal_references", []),
                "text": doc["text"]
            })

            if len(results) >= top_k:
                break

        return results
