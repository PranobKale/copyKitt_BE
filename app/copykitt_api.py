from fastapi import FastAPI , HTTPException
from copykitt import generate_braanding_snippet , generate_keywords 
from mangum import Mangum

app = FastAPI()
handler = Mangum(app)
Max_INPUT_LENGTH = 12

@app.get("/generate_braanding_snippet")
async def generate_snippet_api(prompt: str):
    result = generate_braanding_snippet(prompt)
    return {"snippet": f"{result}"}

@app.get("/generate_braanding_keywords")
async def generate_keywords_api(prompt: str):
    result = generate_keywords(prompt)
    return {"keywords": f"{result}"}


@app.get("/generate_braanding_snippets_keywords")
async def generate_keywords_api(prompt: str):
    validate_length(prompt)
    snippet = generate_braanding_snippet(prompt)
    keywords = generate_keywords(prompt)
    return {
            "snippet": f"{snippet}",
            "keywords": f"{keywords}"
           }

def validate_length(prompt: str):
    if len(prompt) >= Max_INPUT_LENGTH:
        raise HTTPException(status_code=400, detail=f"Input length is too long, need to be under {Max_INPUT_LENGTH} characters.")
    pass



# uvicorn copykitt_api:app --reload
