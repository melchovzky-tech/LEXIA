import json
import urllib.request
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent
SOURCES_FILE = BASE_DIR / "data" / "sources" / "official_sources.json"
PDF_DIR = BASE_DIR / "data" / "pdfs"


def safe_filename(source):
    name = source["id"].strip().lower().replace(" ", "_")
    return f"{name}.pdf"


def fetch_sources():
    if not SOURCES_FILE.exists():
        raise FileNotFoundError(f"No existe manifest de fuentes: {SOURCES_FILE}")

    with open(SOURCES_FILE, "r", encoding="utf-8") as file:
        sources = json.load(file)

    downloaded = []

    for source in sources:
        category = source.get("category", "general")
        target_dir = PDF_DIR / category
        target_dir.mkdir(parents=True, exist_ok=True)
        target_path = target_dir / safe_filename(source)

        request = urllib.request.Request(
            source["url"],
            headers={"User-Agent": "LEX-IA IAJUR Engine/0.5"}
        )

        print(f"Descargando {source['name']} -> {target_path}")

        with urllib.request.urlopen(request, timeout=60) as response:
            target_path.write_bytes(response.read())

        downloaded.append(str(target_path))

    return downloaded


if __name__ == "__main__":
    files = fetch_sources()
    print("Fuentes descargadas:")
    for file_path in files:
        print(f"- {file_path}")
