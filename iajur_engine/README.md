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

## Regla de seguridad

IAJUR no debe inventar artículos ni plazos. Si no encuentra fundamento suficiente, debe pedir documentos o recomendar revisión profesional.
