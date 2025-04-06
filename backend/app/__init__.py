from flask import Flask
from app.routes import bp
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app = Flask(__name__)
    CORS(app)
    # Define o prefixo /api para todas as rotas
    app.register_blueprint(bp, url_prefix="/api")
    
    return app
