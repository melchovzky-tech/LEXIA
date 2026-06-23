from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from src.engine import IAJUREngine


app = FastAPI(
    title="IAJUR Engine",
    description="Motor Jurídico Documental de LEX-IA",
    version="0.4.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        "http://127.0.0.1:5501",
        "http://localhost:5501",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = IAJUREngine()


class ConsultaRequest(BaseModel):
    pregunta: str
    rama: str | None = None
    top_k: int = 5
    incluir_doctrina: bool = False


@app.get("/")
def home():
    return {
        "status": "ok",
        "message": "IAJUR Engine activo",
        "version": "0.4.0"
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