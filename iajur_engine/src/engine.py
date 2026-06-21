from src.search import LegalSearchEngine


class IAJUREngine:
    def __init__(self):
        self.search_engine = LegalSearchEngine()

    def consultar(
        self,
        pregunta: str,
        top_k: int = 5,
        rama: str | None = None,
        incluir_doctrina: bool = True
    ):
        resultados = self.search_engine.search(
            pregunta,
            top_k=top_k,
            rama=rama,
            incluir_doctrina=incluir_doctrina
        )

        if not resultados:
            return {
                "respuesta": (
                    "Resultado preliminar LEX-IA\n\n"
                    "Rama jurídica detectada:\n"
                    "No determinada.\n\n"
                    "Tema probable:\n"
                    "No determinado.\n\n"
                    "Fundamento jurídico:\n"
                    "No se encontró fundamento jurídico suficiente en los documentos indexados.\n\n"
                    "Nota LEX-IA:\n"
                    "Para evitar una respuesta imprecisa, LEX-IA no debe inventar artículos, "
                    "leyes, plazos ni criterios no localizados en la biblioteca documental."
                ),
                "fundamentos": [],
                "apoyo_doctrinal": []
            }

        fundamentos_normativos = []
        apoyos_doctrinales = []

        for item in resultados:
            source_type = item.get("source_type", "normativa")

            registro = {
                "documento": item["source_file"],
                "categoria": item["category"],
                "tipo_fuente": source_type,
                "pagina": item["page"],
                "fragmento": item["text"][:900],
                "score": item["score"]
            }

            if source_type == "doctrina":
                apoyos_doctrinales.append(registro)
            else:
                fundamentos_normativos.append(registro)

        rama_detectada = rama.capitalize() if rama else self.detectar_rama(resultados)
        tema_probable = self.detectar_tema(pregunta)

        respuesta = self.crear_respuesta_estructurada(
            rama_detectada=rama_detectada,
            tema_probable=tema_probable,
            fundamentos_normativos=fundamentos_normativos,
            apoyos_doctrinales=apoyos_doctrinales
        )

        return {
            "respuesta": respuesta,
            "fundamentos": fundamentos_normativos,
            "apoyo_doctrinal": apoyos_doctrinales
        }

    def detectar_rama(self, resultados: list):
        if not resultados:
            return "No determinada"

        categorias = [item.get("category", "") for item in resultados]

        prioridad = [
            "laboral",
            "familiar",
            "civil",
            "militar",
            "federal",
            "estatal",
            "doctrina"
        ]

        for rama in prioridad:
            if rama in categorias:
                return rama.capitalize()

        return categorias[0].capitalize() if categorias else "No determinada"

    def detectar_tema(self, pregunta: str):
        pregunta_lower = pregunta.lower()

        if "despido" in pregunta_lower or "trabajo" in pregunta_lower or "salario" in pregunta_lower:
            return "Posible asunto laboral"

        if "alimento" in pregunta_lower or "pensión" in pregunta_lower or "custodia" in pregunta_lower:
            return "Posible asunto familiar"

        if "divorcio" in pregunta_lower:
            return "Posible divorcio"

        if "herencia" in pregunta_lower or "sucesión" in pregunta_lower or "testamento" in pregunta_lower:
            return "Posible sucesión"

        if "amparo" in pregunta_lower:
            return "Posible juicio de amparo"

        if "militar" in pregunta_lower or "disciplina" in pregunta_lower or "armada" in pregunta_lower:
            return "Posible asunto militar o disciplinario"

        return "Tema jurídico por determinar"

    def crear_respuesta_estructurada(
        self,
        rama_detectada: str,
        tema_probable: str,
        fundamentos_normativos: list,
        apoyos_doctrinales: list
    ):
        texto = "Resultado preliminar LEX-IA\n\n"

        texto += "Rama jurídica detectada:\n"
        texto += f"{rama_detectada}.\n\n"

        texto += "Tema probable:\n"
        texto += f"{tema_probable}.\n\n"

        if fundamentos_normativos:
            texto += "Fundamento jurídico localizado:\n\n"

            for i, fundamento in enumerate(fundamentos_normativos[:3], start=1):
                texto += f"{i}. Documento: {fundamento['documento']}\n"
                texto += f"   Página: {fundamento['pagina']}\n"
                texto += "   Tipo de fuente: Normativa\n\n"

                texto += "   Fragmento localizado:\n"
                texto += f"   {fundamento['fragmento']}...\n\n"

                texto += "   Interpretación preliminar LEX-IA:\n"
                texto += (
                    "   El fragmento localizado puede orientar el caso, "
                    "pero debe confirmarse su aplicación con los hechos concretos, "
                    "la jurisdicción, las pruebas disponibles y la revisión de un abogado.\n\n"
                )
        else:
            texto += "Fundamento jurídico localizado:\n"
            texto += "No se localizó fundamento normativo directo en los documentos disponibles.\n\n"

        if apoyos_doctrinales:
            texto += "Apoyo doctrinal localizado:\n\n"

            for i, apoyo in enumerate(apoyos_doctrinales[:2], start=1):
                texto += f"{i}. Documento: {apoyo['documento']}\n"
                texto += f"   Página: {apoyo['pagina']}\n"
                texto += "   Tipo de fuente: Doctrina\n\n"

                texto += "   Fragmento doctrinal:\n"
                texto += f"   {apoyo['fragmento']}...\n\n"
        else:
            texto += "Apoyo doctrinal:\n"
            texto += "No se localizó apoyo doctrinal relacionado en la biblioteca cargada.\n\n"

        texto += "Nota LEX-IA:\n"
        texto += (
            "La doctrina se utiliza como apoyo explicativo, pero no sustituye el fundamento "
            "jurídico obligatorio. Esta orientación es preliminar y debe ser revisada por un abogado."
        )

        return texto