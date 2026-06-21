import json
import fitz
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent
PDF_DIR = BASE_DIR / "data" / "pdfs"
INDEX_DIR = BASE_DIR / "data" / "index"
OUTPUT_FILE = INDEX_DIR / "corpus.json"


def split_text(text: str, max_chars: int = 1500):
    paragraphs = text.split("\n")
    chunks = []
    current = ""

    for paragraph in paragraphs:
        paragraph = paragraph.strip()

        if not paragraph:
            continue

        if len(current) + len(paragraph) <= max_chars:
            current += " " + paragraph
        else:
            chunks.append(current.strip())
            current = paragraph

    if current:
        chunks.append(current.strip())

    return chunks


def extract_text_from_pdf(pdf_path: Path):
    documents = []

    try:
        pdf = fitz.open(pdf_path)

        for page_number, page in enumerate(pdf, start=1):
            text = page.get_text("text")

            if not text.strip():
                continue

            chunks = split_text(text)

            for i, chunk in enumerate(chunks):
                category = pdf_path.parent.name
                source_type = "doctrina" if category == "doctrina" else "normativa"

                documents.append({
                    "source_file": pdf_path.name,
                    "category": category,
                    "source_type": source_type,
                    "page": page_number,
                    "chunk_id": f"{pdf_path.stem}_p{page_number}_c{i}",
                    "text": chunk.strip()
                })

        pdf.close()

    except Exception as error:
        print(f"Error leyendo {pdf_path}: {error}")

    return documents


def build_corpus():
    INDEX_DIR.mkdir(parents=True, exist_ok=True)

    all_documents = []
    pdf_files = list(PDF_DIR.rglob("*.pdf"))

    if not pdf_files:
        print("No se encontraron PDFs.")
        print("Coloca leyes en: iajur_engine/data/pdfs/")
        return

    for pdf_path in pdf_files:
        print(f"Procesando: {pdf_path}")
        docs = extract_text_from_pdf(pdf_path)
        all_documents.extend(docs)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as file:
        json.dump(all_documents, file, ensure_ascii=False, indent=2)

    print("Corpus generado correctamente.")
    print(f"Archivo: {OUTPUT_FILE}")
    print(f"Fragmentos indexados: {len(all_documents)}")


if __name__ == "__main__":
    build_corpus()