from dataclasses import dataclass
from datetime import datetime
from typing import Optional

@dataclass
class Diagnostic:
    id: str
    device: str
    city: str
    state: str
    latency_ms: int
    packet_loss: float
    quality_of_service: float
    date: str

    def to_dict(self):
        return {
            "id": self.id,
            "device": self.device,
            "city": self.city,
            "state": self.state,
            "latency_ms": self.latency_ms,
            "packet_loss": self.packet_loss,
            "quality_of_service": self.quality_of_service,
            "date": self.date.isoformat() if self.date else None
        }