# IAJUR Engine

Motor jurídico documental de LEX-IA.

## Qué hace ahora

- Busca fundamentos en `data/index/corpus.json` cuando existe.
- Si no hay PDFs o corpus generado, usa `data/index/legal_seed.json`.
- Entrega una respuesta con:
  - rama jurídica probable,
  - tema probable,
  - hechos que deben precisarse,
  - documentos/pruebas sugeridas,
  - riesgos,
  - fundamentos localizados,
  - siguiente paso recomendado.

## Fuentes oficiales

El manifest `data/sources/official_sources.json` contiene fuentes públicas iniciales:

- Ley Federal del Trabajo.
- Código Civil Federal.
- Código Nacional de Procedimientos Civiles y Familiares.
- Ley de Amparo.
- Constitución.
- Código Penal Federal.
- Código Nacional de Procedimientos Penales.
- Ley del Seguro Social.
- Leyes familiares y de protección de niñez.
- Portales de jurisprudencia SCJN/SJF.

Para descargar PDFs oficiales:

```bash
python src/fetch_official_sources.py
```

Para reconstruir el corpus desde PDFs:

```bash
python src/ingest.py
```

## Semilla jurídica

`data/index/legal_seed.json` no pretende reemplazar leyes completas. Es una base operativa para que el motor entienda lógica jurídica básica:

- hechos,
- norma probable,
- subsunción,
- prueba,
- riesgo,
- siguiente paso.

Cada entrada debe tener referencias y advertir si la legislación depende del Estado o de vigencia.

## Jurisprudencia

`data/index/jurisprudence_seed.json` agrega reglas para usar criterios judiciales sin inventarlos:

- distinguir jurisprudencia, tesis aislada y precedentes,
- pedir registro digital, rubro, órgano, época y materia,
- marcar como "criterio por localizar" cuando no exista cita verificable,
- explicar cuándo la jurisprudencia ayuda a interpretar una norma.

Las fuentes base son:

- Semanario Judicial de la Federación.
- Buscador Jurídico SCJN.
- Juris Lex.
- Biblioteca Digital SCJN.

Ver `data/sources/professionalization_plan.md`.

## Regla de seguridad

IAJUR no debe inventar artículos ni plazos. Si no encuentra fundamento suficiente, debe pedir documentos o recomendar revisión profesional.
