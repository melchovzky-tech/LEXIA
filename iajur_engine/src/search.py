import json
from pathlib import Path
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


BASE_DIR = Path(__file__).resolve().parent.parent
CORPUS_FILE = BASE_DIR / "data" / "index" / "corpus.json"


class LegalSearchEngine:
    def __init__(self):
        self.documents = []
        self.vectorizer = None
        self.matrix = None
        self.load_corpus()

    def load_corpus(self):
        if not CORPUS_FILE.exists():
            raise FileNotFoundError(
                "No existe corpus.json. Primero ejecuta: python src\\ingest.py"
            )

        with open(CORPUS_FILE, "r", encoding="utf-8") as file:
            self.documents = json.load(file)

        texts = [doc["text"] for doc in self.documents]

        self.vectorizer = TfidfVectorizer(
            lowercase=True,
            stop_words=None,
            ngram_range=(1, 2)
        )

        self.matrix = self.vectorizer.fit_transform(texts)

    def search(self, query: str, top_k: int = 5, rama: str | None = None, incluir_doctrina: bool = True):
        if not query.strip():
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
                "category": doc["category"],
                "source_type": source_type,
                "page": doc["page"],
                "chunk_id": doc["chunk_id"],
                "text": doc["text"]
            })

            if len(results) >= top_k:
                break

        return results