#!/bin/bash
export FLASK_ENV=development
export FLASK_RUN_HOST=0.0.0.0
export FLASK_RUN_PORT=5000

# Aqui dizemos ao Flask que existe um app factory chamada create_app no pacote app
export FLASK_APP="app:create_app"

flask run --debug --reload
