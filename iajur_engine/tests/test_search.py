import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from src.search import LegalSearchEngine


class LegalSearchEngineTests(unittest.TestCase):
    def test_missing_corpus_keeps_search_available(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            corpus_file = Path(temporary_directory) / "corpus.json"

            with patch("src.search.CORPUS_FILE", corpus_file):
                search_engine = LegalSearchEngine()

            self.assertEqual(search_engine.search("despido"), [])

    def test_empty_corpus_keeps_search_available(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            corpus_file = Path(temporary_directory) / "corpus.json"
            corpus_file.write_text("[]", encoding="utf-8")

            with patch("src.search.CORPUS_FILE", corpus_file):
                search_engine = LegalSearchEngine()

            self.assertEqual(search_engine.search("despido"), [])

    def test_malformed_corpus_keeps_search_available(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            corpus_file = Path(temporary_directory) / "corpus.json"
            corpus_file.write_text("not-json", encoding="utf-8")

            with patch("src.search.CORPUS_FILE", corpus_file):
                search_engine = LegalSearchEngine()

            self.assertEqual(search_engine.search("despido"), [])

    def test_valid_corpus_remains_searchable(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            corpus_file = Path(temporary_directory) / "corpus.json"
            corpus_file.write_text(
                json.dumps([
                    {
                        "source_file": "ley.pdf",
                        "category": "laboral",
                        "source_type": "normativa",
                        "page": 1,
                        "chunk_id": "ley_p1_c0",
                        "text": "El salario protege a la persona trabajadora."
                    }
                ]),
                encoding="utf-8"
            )

            with patch("src.search.CORPUS_FILE", corpus_file):
                search_engine = LegalSearchEngine()

            results = search_engine.search("salario")

            self.assertEqual(len(results), 1)
            self.assertEqual(results[0]["source_file"], "ley.pdf")


if __name__ == "__main__":
    unittest.main()
