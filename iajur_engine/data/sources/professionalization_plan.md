# Plan profesional de alimentación jurídica IAJUR

## Principio

IAJUR no debe aprender derecho como texto suelto. Debe operar con fuentes clasificadas, vigencia, jurisdicción, tipo de fuente, confiabilidad y reglas de citación.

## Capas de conocimiento

1. **Normativa primaria**
   - Constitución.
   - Códigos.
   - Leyes federales.
   - Leyes generales.
   - Reglamentos.
   - Normas locales por entidad federativa.

2. **Jurisprudencia y tesis**
   - Semanario Judicial de la Federación.
   - Buscador Jurídico SCJN.
   - Juris Lex.
   - Sentencias relevantes SCJN.

3. **Doctrina y materiales de apoyo**
   - Biblioteca Digital SCJN.
   - Protocolos SCJN.
   - Guías institucionales.
   - Manuales oficiales.

4. **Lógica jurídica operativa**
   - Hechos relevantes.
   - Supuesto normativo.
   - Subsunción.
   - Carga de la prueba.
   - Riesgos y plazos.
   - Estrategia preliminar.

## Regla de citación

Cuando IAJUR use una ley debe indicar:

- nombre del ordenamiento,
- artículo si está disponible,
- jurisdicción,
- fuente,
- fecha o versión si fue detectada.

Cuando use jurisprudencia debe indicar:

- registro digital,
- rubro,
- órgano,
- época,
- materia,
- fuente o enlace.

Si no cuenta con esos datos, debe marcar la salida como **criterio por localizar** o **requiere validación en SJF**.

## Flujo de actualización

1. Actualizar manifest `official_sources.json`.
2. Descargar PDFs oficiales con `python src/fetch_official_sources.py`.
3. Generar corpus con `python src/ingest.py`.
4. Ejecutar pruebas.
5. Revisar manualmente entradas de jurisprudencia antes de marcarlas como criterios citables.

## Advertencia

El motor puede orientar y organizar el razonamiento, pero no debe representar conclusiones como asesoría definitiva sin revisión profesional.
