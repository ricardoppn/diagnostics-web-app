# app/routes.py

from flask import Blueprint
from app.controllers.diagnostic_controller import diagnostic_bp
from flask_cors import CORS  # Importando o CORS

bp = Blueprint("api", __name__)
bp.register_blueprint(diagnostic_bp)
