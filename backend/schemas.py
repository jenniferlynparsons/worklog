# Pydantic models (what data the API accepts/returns)
from pydantic import BaseModel  
from datetime import datetime

class EntryCreate(BaseModel):
    title: str
class EntryResponse(BaseModel):
    id: int
    title: str
    created_at: datetime
