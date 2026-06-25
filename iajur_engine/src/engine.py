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
                    "No se encontró fundamento jurídico suficiente en la biblioteca cargada.\n\n"
                    "Nota LEX-IA:\n"
                    "Para evitar una respuesta imprecisa, LEX-IA no debe inventar artículos, "
                    "leyes, plazos ni criterios no localizados en la biblioteca documental."
                ),
                "fundamentos": [],
                "apoyo_doctrinal": [],
                "analisis": {}
            }

        fundamentos_normativos = []
        apoyos_doctrinales = []

        for item in resultados:
            source_type = item.get("source_type", "normativa")

            registro = {
                "documento": item.get("source_name", item["source_file"]),
                "archivo": item["source_file"],
                "categoria": item["category"],
                "tipo_fuente": source_type,
                "jurisdiccion": item.get("jurisdiction", "mx"),
                "pagina": item["page"],
                "referencias": item.get("legal_references", []),
                "fragmento": item["text"][:900],
                "score": item["score"]
            }

            if source_type in ["doctrina", "doctrina_operativa"]:
                apoyos_doctrinales.append(registro)
            else:
                fundamentos_normativos.append(registro)

        rama_detectada = rama.capitalize() if rama else self.detectar_rama(resultados)
        tema_probable = self.detectar_tema(pregunta)
        analisis = self.analizar_hechos_y_estrategia(pregunta, rama_detectada)

        respuesta = self.crear_respuesta_estructurada(
            rama_detectada=rama_detectada,
            tema_probable=tema_probable,
            fundamentos_normativos=fundamentos_normativos,
            apoyos_doctrinales=apoyos_doctrinales,
            analisis=analisis
        )

        return {
            "respuesta": respuesta,
            "fundamentos": fundamentos_normativos,
            "apoyo_doctrinal": apoyos_doctrinales,
            "analisis": analisis
        }

    def detectar_rama(self, resultados: list):
        if not resultados:
            return "No determinada"

        categorias = [item.get("category", "") for item in resultados]

        prioridad = [
            "laboral",
            "familiar",
            "civil",
            "procesal",
            "amparo",
            "militar",
            "federal",
            "estatal",
            "metodologia"
        ]

        for rama in prioridad:
            if rama in categorias:
                return rama.capitalize()

        return categorias[0].capitalize() if categorias else "No determinada"

    def detectar_tema(self, pregunta: str):
        pregunta_lower = pregunta.lower()

        if any(palabra in pregunta_lower for palabra in ["despido", "trabajo", "salario", "renuncia"]):
            return "Posible asunto laboral"

        if any(palabra in pregunta_lower for palabra in ["alimento", "pensión", "pension", "custodia"]):
            return "Posible asunto familiar"

        if "divorcio" in pregunta_lower:
            return "Posible divorcio"

        if any(palabra in pregunta_lower for palabra in ["herencia", "sucesión", "sucesion", "testamento"]):
            return "Posible sucesión"

        if "amparo" in pregunta_lower:
            return "Posible juicio de amparo"

        if any(palabra in pregunta_lower for palabra in ["contrato", "adeudo", "arrendamiento", "renta"]):
            return "Posible asunto civil o contractual"

        if any(palabra in pregunta_lower for palabra in ["militar", "disciplina", "armada"]):
            return "Posible asunto militar o disciplinario"

        return "Tema jurídico por determinar"

    def analizar_hechos_y_estrategia(self, pregunta: str, rama_detectada: str):
        texto = pregunta.lower()
        hechos = []
        pruebas = []
        riesgos = []
        siguientes_pasos = []

        if any(palabra in texto for palabra in ["despido", "trabajo", "salario", "renuncia", "liquidacion", "liquidación"]):
            hechos.extend([
                "fecha de ingreso y fecha de separación",
                "puesto, salario diario y forma de pago",
                "persona física o moral que daba órdenes",
                "forma en que ocurrió la terminación"
            ])
            pruebas.extend([
                "contrato, recibos de nómina, estados de cuenta o transferencias",
                "alta IMSS, credencial, correos, WhatsApp o testigos",
                "carta de despido, renuncia o convenio si existe"
            ])
            riesgos.extend([
                "plazos laborales sensibles",
                "diferenciar despido, renuncia y terminación negociada"
            ])
            siguientes_pasos.append("preparar cálculo preliminar y valorar conciliación prejudicial")

        if any(palabra in texto for palabra in ["pension", "pensión", "alimentos", "custodia", "convivencia", "divorcio"]):
            hechos.extend([
                "parentesco, edad de menores y domicilio",
                "necesidades económicas y capacidad de pago",
                "situación escolar, médica y de cuidados"
            ])
            pruebas.extend([
                "actas, comprobantes de gastos, ingresos y escuela",
                "mensajes, depósitos y antecedentes de cuidado"
            ])
            riesgos.append("la norma concreta puede depender del Estado")
            siguientes_pasos.append("ordenar documentos familiares y definir medida urgente si hay riesgo")

        if any(palabra in texto for palabra in ["contrato", "adeudo", "renta", "arrendamiento", "incumplimiento"]):
            hechos.extend([
                "partes del contrato y objeto",
                "obligación incumplida, fecha y monto",
                "requerimientos previos o comunicaciones"
            ])
            pruebas.extend([
                "contrato, recibos, facturas, transferencias y mensajes",
                "evidencia de entrega, daños o incumplimiento"
            ])
            riesgos.append("identificar vía y competencia antes de demandar")
            siguientes_pasos.append("hacer línea del tiempo y requerimiento formal si procede")

        if any(palabra in texto for palabra in ["amparo", "autoridad", "multa", "clausura", "acto"]):
            hechos.extend([
                "autoridad responsable",
                "acto reclamado y fecha de conocimiento",
                "derecho afectado y daño inmediato"
            ])
            pruebas.extend([
                "notificación, resolución, oficio o evidencia del acto",
                "documentos que acrediten interés jurídico o legítimo"
            ])
            riesgos.append("posible plazo breve para promover amparo")
            siguientes_pasos.append("analizar suspensión y medio de defensa ordinario")

        if not hechos:
            hechos.extend([
                "personas involucradas",
                "fechas principales",
                "documentos disponibles",
                "lugar donde ocurrieron los hechos"
            ])
            pruebas.extend([
                "contratos, mensajes, recibos, identificaciones y testigos",
                "documentos oficiales o privados relacionados"
            ])
            siguientes_pasos.append("clasificar la rama jurídica y pedir documentos mínimos")

        return {
            "rama": rama_detectada,
            "hechos_relevantes": list(dict.fromkeys(hechos)),
            "pruebas_sugeridas": list(dict.fromkeys(pruebas)),
            "riesgos": list(dict.fromkeys(riesgos)),
            "siguientes_pasos": list(dict.fromkeys(siguientes_pasos))
        }

    def crear_respuesta_estructurada(
        self,
        rama_detectada: str,
        tema_probable: str,
        fundamentos_normativos: list,
        apoyos_doctrinales: list,
        analisis: dict
    ):
        texto = "Resultado preliminar LEX-IA\n\n"

        texto += "Rama jurídica detectada:\n"
        texto += f"{rama_detectada}.\n\n"

        texto += "Tema probable:\n"
        texto += f"{tema_probable}.\n\n"

        texto += "Método de análisis aplicado:\n"
        texto += (
            "LEX-IA separa hechos, norma probable, pruebas, riesgos y siguiente paso. "
            "La respuesta no sustituye la revisión de un abogado, pero organiza el caso "
            "para decidir con mayor claridad.\n\n"
        )

        texto += "Hechos que deben precisarse:\n"
        for hecho in analisis.get("hechos_relevantes", [])[:6]:
            texto += f"- {hecho}.\n"
        texto += "\n"

        texto += "Pruebas o documentos sugeridos:\n"
        for prueba in analisis.get("pruebas_sugeridas", [])[:6]:
            texto += f"- {prueba}.\n"
        texto += "\n"

        if analisis.get("riesgos"):
            texto += "Riesgos o alertas:\n"
            for riesgo in analisis["riesgos"][:4]:
                texto += f"- {riesgo}.\n"
            texto += "\n"

        if fundamentos_normativos:
            texto += "Fundamento jurídico localizado:\n\n"

            for i, fundamento in enumerate(fundamentos_normativos[:3], start=1):
                texto += f"{i}. Documento: {fundamento['documento']}\n"
                if fundamento.get("referencias"):
                    texto += f"   Referencias: {', '.join(fundamento['referencias'])}\n"
                texto += f"   Página: {fundamento['pagina']}\n"
                texto += f"   Tipo de fuente: {fundamento['tipo_fuente']}\n\n"

                texto += "   Fragmento localizado:\n"
                texto += f"   {fundamento['fragmento']}...\n\n"

                texto += "   Interpretación preliminar LEX-IA:\n"
                texto += (
                    "   El fragmento localizado puede orientar el caso, "
                    "pero debe confirmarse su aplicación con hechos concretos, "
                    "jurisdicción, pruebas disponibles y revisión de un abogado.\n\n"
                )
        else:
            texto += "Fundamento jurídico localizado:\n"
            texto += "No se localizó fundamento normativo directo en los documentos disponibles.\n\n"

        if analisis.get("siguientes_pasos"):
            texto += "Siguiente paso recomendado:\n"
            for paso in analisis["siguientes_pasos"][:3]:
                texto += f"- {paso}.\n"
            texto += "\n"

        if apoyos_doctrinales:
            texto += "Apoyo doctrinal o metodológico localizado:\n\n"

            for i, apoyo in enumerate(apoyos_doctrinales[:2], start=1):
                texto += f"{i}. Documento: {apoyo['documento']}\n"
                texto += f"   Tipo de fuente: {apoyo['tipo_fuente']}\n"
                texto += "   Fragmento:\n"
                texto += f"   {apoyo['fragmento']}...\n\n"
        else:
            texto += "Apoyo doctrinal:\n"
            texto += "No se localizó apoyo doctrinal relacionado en la biblioteca cargada.\n\n"

        texto += "Nota LEX-IA:\n"
        texto += (
            "La doctrina y las síntesis operativas se usan como apoyo explicativo, "
            "pero no sustituyen la norma vigente ni el criterio profesional. "
            "Antes de presentar demanda, convenio o defensa, debe verificarse vigencia, "
            "competencia, jurisdicción y documentos."
        )

        return texto
