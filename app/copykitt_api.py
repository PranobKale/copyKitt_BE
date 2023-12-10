from fastapi import FastAPI , HTTPException
from copykitt import generate_braanding_snippet , generate_keywords 
from mangum import Mangum
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
handler = Mangum(app)
Max_INPUT_LENGTH = 12

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get("/generate_braanding_snippet")
async def generate_snippet_api(prompt: str):
    snippet = generate_braanding_snippet(prompt)
    return {"snippet": snippet, "keywords": []}


@app.get("/generate_braanding_keywords")
async def generate_keywords_api(prompt: str):
    keywords = generate_keywords(prompt)
    return {"snippet": None, "keywords": keywords}



@app.get("/generate_braanding_snippets_keywords")
async def generate_keywords_api(prompt: str):
    validate_length(prompt)
    snippet = generate_braanding_snippet(prompt)
    keywords = generate_keywords(prompt)
    return {"snippet": snippet, "keywords": keywords}

def validate_length(prompt: str):
    if len(prompt) >= Max_INPUT_LENGTH:
        raise HTTPException(status_code=400, detail=f"Input length is too long, need to be under {Max_INPUT_LENGTH} characters.")
    pass



# uvicorn copykitt_api:app --reload
