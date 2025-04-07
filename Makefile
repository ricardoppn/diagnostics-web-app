# Subir os containers com build
up:
	docker-compose up --build

# Derrubar os containers
down:
	docker-compose down

# Reiniciar containers
restart:
	docker-compose down && docker-compose up --build

# Acessar o container do backend
backend-shell:
	docker exec -it diagnostics_backend bash

# Instalar dependências do frontend
frontend-install:
	cd frontend/frontend && npm install

# Rodar o frontend
frontend-dev:
	cd frontend/frontend && npm run dev

# Iniciar tudo (containers + instalar frontend)
start:
	make up && make frontend-install && make frontend-dev
