# app/controllers/diagnostic_controller.py

from flask import Blueprint, request, jsonify
from app.services.diagnostic_services import DiagnosticServices

diagnostic_bp = Blueprint('diagnostic', __name__)

@diagnostic_bp.route('/diagnostics', methods=['GET'])
def get_diagnostics():
    page = request.args.get("page", default=1, type=int)
    limit = request.args.get("limit", default=10, type=int)
    city = request.args.get("city")
    state = request.args.get("state")

    try:
        diagnostics = DiagnosticServices.get_paginated_diagnostics(
            page=page,
            limit=limit,
            city=city,
            state=state
        )
        return jsonify(diagnostics)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@diagnostic_bp.route('/aggregated', methods=['GET'])
def get_aggregated():
    city = request.args.get("city")
    state = request.args.get("state")

    try:
        aggregated = DiagnosticServices.get_aggregated(city=city, state=state)
        return jsonify(aggregated)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
