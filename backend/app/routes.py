# app/routes.py

from flask import Blueprint
from app.controllers.diagnostic_controller import diagnostic_bp


bp = Blueprint("api", __name__)
bp.register_blueprint(diagnostic_bp)
