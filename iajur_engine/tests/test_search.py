import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from src.search import LegalSearchEngine
from src.engine import IAJUREngine


class LegalSearchEngineTests(unittest.TestCase):
    def test_missing_corpus_keeps_search_available(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            corpus_file = Path(temporary_directory) / "corpus.json"
            seed_file = Path(temporary_directory) / "legal_seed.json"
            jurisprudence_file = Path(temporary_directory) / "jurisprudence_seed.json"

            with patch("src.search.CORPUS_FILE", corpus_file), patch("src.search.LEGAL_SEED_FILE", seed_file), patch("src.search.JURISPRUDENCE_SEED_FILE", jurisprudence_file):
                search_engine = LegalSearchEngine()

            self.assertEqual(search_engine.search("despido"), [])

    def test_empty_corpus_keeps_search_available(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            corpus_file = Path(temporary_directory) / "corpus.json"
            seed_file = Path(temporary_directory) / "legal_seed.json"
            jurisprudence_file = Path(temporary_directory) / "jurisprudence_seed.json"
            corpus_file.write_text("[]", encoding="utf-8")

            with patch("src.search.CORPUS_FILE", corpus_file), patch("src.search.LEGAL_SEED_FILE", seed_file), patch("src.search.JURISPRUDENCE_SEED_FILE", jurisprudence_file):
                search_engine = LegalSearchEngine()

            self.assertEqual(search_engine.search("despido"), [])

    def test_malformed_corpus_keeps_search_available(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            corpus_file = Path(temporary_directory) / "corpus.json"
            seed_file = Path(temporary_directory) / "legal_seed.json"
            jurisprudence_file = Path(temporary_directory) / "jurisprudence_seed.json"
            corpus_file.write_text("not-json", encoding="utf-8")

            with patch("src.search.CORPUS_FILE", corpus_file), patch("src.search.LEGAL_SEED_FILE", seed_file), patch("src.search.JURISPRUDENCE_SEED_FILE", jurisprudence_file):
                search_engine = LegalSearchEngine()

            self.assertEqual(search_engine.search("despido"), [])

    def test_valid_corpus_remains_searchable_without_seed(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            corpus_file = Path(temporary_directory) / "corpus.json"
            seed_file = Path(temporary_directory) / "legal_seed.json"
            jurisprudence_file = Path(temporary_directory) / "jurisprudence_seed.json"
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

            with patch("src.search.CORPUS_FILE", corpus_file), patch("src.search.LEGAL_SEED_FILE", seed_file), patch("src.search.JURISPRUDENCE_SEED_FILE", jurisprudence_file):
                search_engine = LegalSearchEngine()

            results = search_engine.search("salario")

            self.assertEqual(len(results), 1)
            self.assertEqual(results[0]["source_file"], "ley.pdf")

    def test_seed_corpus_expands_legal_knowledge(self):
        search_engine = LegalSearchEngine()

        results = search_engine.search("me despidieron y no me pagaron salario", rama="laboral")

        self.assertGreaterEqual(len(results), 1)
        self.assertIn("laboral", {result["category"] for result in results})

    def test_engine_explains_legal_method(self):
        engine = IAJUREngine()

        result = engine.consultar("me despidieron verbalmente y no me pagaron liquidación", rama="laboral")

        self.assertIn("Hechos que deben precisarse", result["respuesta"])
        self.assertIn("Pruebas o documentos sugeridos", result["respuesta"])
        self.assertIn("fundamentos", result)

    def test_jurisprudence_seed_is_searchable_as_support(self):
        search_engine = LegalSearchEngine()

        results = search_engine.search("jurisprudencia interes superior custodia alimentos", incluir_doctrina=True)
        source_types = {result["source_type"] for result in results}

        self.assertTrue(any("jurisprudencia" in source_type for source_type in source_types))


if __name__ == "__main__":
    unittest.main()
