from fastapi import FastAPI
from pydantic import BaseModel
from src.engine import IAJUREngine


app = FastAPI(
    title="IAJUR Engine",
    description="Motor Jurídico Documental de LEX-IA",
    version="0.3.0"
)

engine = IAJUREngine()


class ConsultaRequest(BaseModel):
    pregunta: str
    rama: str | None = None
    top_k: int = 5
    incluir_doctrina: bool = True


@app.get("/")
def home():
    return {
        "status": "ok",
        "message": "IAJUR Engine activo",
        "version": "0.3.0"
    }


@app.post("/consultar")
def consultar(request: ConsultaRequest):
    resultado = engine.consultar(
        pregunta=request.pregunta,
        top_k=request.top_k,
        rama=request.rama,
        incluir_doctrina=request.incluir_doctrina
    )

    return resultado