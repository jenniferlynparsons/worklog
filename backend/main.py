#  Your FastAPI app initialization and setup
from fastapi import FastAPI
from routes import entries
from database import engine
import models   
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(entries.router)  
# Include the entries router
@app.get("/")
def read_root():
    return {"message": "Welcome to the Worklog API"}    

# Create database tables
@app.on_event("startup")
def on_startup():   
    models.Base.metadata.create_all(bind=engine)