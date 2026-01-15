# SQLAlchemy model definitions (what your Entry table looks like)
from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from database import Base  

class Entry(Base):
    __tablename__ = "entries"

    id = Column(Integer, primary_key=True, index=True, nullable=False)
    title = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)