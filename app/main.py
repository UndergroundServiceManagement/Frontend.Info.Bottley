from fastapi import FastAPI
from starlette.responses import FileResponse, RedirectResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from typing import Optional
import os.path

app = FastAPI()

app.mount("/page", StaticFiles(directory="page"), name="page")

responseHeader = {"Accept-Encoding": "gzip", "Content-Encoding": "gzip"}

@app.get("/")
async def index():
    return FileResponse("page/index.html.gz", media_type="text/html", headers=responseHeader)

@app.get("/{fileName}")
async def main(fileName: Optional[str] = "index.html"):
    if not os.path.isfile("page/"+fileName+".gz"):
        return RedirectResponse("http://127.0.0.1:8000", status_code=301)
    return FileResponse("page/"+fileName+".gz", media_type="text/html", headers=responseHeader)