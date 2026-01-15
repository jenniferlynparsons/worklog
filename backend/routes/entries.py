# Your API endpoints for creating and listing entries

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List     
import models, schemas
from database import SessionLocal 

router = APIRouter()
# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()  

@router.post("/entries", response_model=schemas.EntryResponse)
def create_entry(entry: schemas.EntryCreate, db: Session = Depends(get_db)):
    db_entry = models.Entry(title=entry.title)
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry 

@router.get("/entries", response_model=List[schemas.EntryResponse])
def read_entries(db: Session = Depends(get_db)):
    entries = db.query(models.Entry).all()
    return entries  
