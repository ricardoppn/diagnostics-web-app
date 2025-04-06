# Diagnostics Web App

Projeto full-stack com backend em Python (Flask) e frontend em React. A aplicação permite visualizar e analisar métricas de diagnósticos de rede como latência, perda de pacotes e qualidade de serviço.

---

## 🚀 Tecnologias

- **Frontend**: React, Vite
- **Backend**: Flask, Flask-CORS, PostgreSQL
- **Banco de Dados**: PostgreSQL
- **Docker**: para orquestração e ambiente de desenvolvimento
- **JWT**: para autenticação
- **bcrypt**: para hash de senhas

---

## 📦 Como rodar o projeto

### Pré-requisitos

- Docker
- Docker Compose
- Node
- Python

### Clone o repositório

    
    git clone https://github.com/seu-usuario/diagnostics-web-app.git
    cd diagnostics-web-app
    

### Iniciando o Projeto:

    
    docker-compose up --build
    

### Backend:
    Após subir o projeto nosso back estará disponível pela porta 5000 e o banco pela porta 5234

### Frontend:
    Com o projeto up, devemos ir para a pasta frontend/frontend e em seguite executar 

    npm install
    npm run dev

    O projeto estará disponível na porta 5173

## 🗂 Estrutura do Projeto
A estrutura principal do pojeto é composta por uma pasta contendo o front e o back sendo cada um deles um containter separado, simulando uma front apartado do back.

    ├── backend
    ├── docker-compose.yml
    ├── frontend
    ├── init_db.sql
    ├── Makefile
    └── README.md

### 🗂 Backend 
    

🚀 Nosso backend está sendo executado através da porta **5000** no Docker.  
A URL base da API é: [`http://localhost:5000/api`](http://localhost:5000/api)

---

### 📡 Rotas Disponíveis

#### 🔍 `/diagnostics`

> **Exemplo:**  
> `http://localhost:5000/api/diagnostics?page=2&limit=5&city=Salvador&state=BA`

- Retorna a lista de diagnósticos armazenados no banco.
- Suporte a paginação (`page`, `limit`).
- Filtros disponíveis:
  - `city`: filtrar por cidade
  - `state`: filtrar por estado

---

#### 📊 `/aggregated`

> **Exemplo:**  
> `http://localhost:5000/api/aggregated?city=Salvador&state=BA`

- Retorna os dados de diagnósticos agrupados por cidade e estado.
- Ideal para montagem de gráficos e dashboards.
- Filtros disponíveis:
  - `city`: filtrar por cidade
  - `state`: filtrar por estado

## 🖥️ Frontend

Nosso frontend foi desenvolvido utilizando **React** com **Vite**, e é executado na porta **5173** por padrão.

A aplicação consome a API exposta em [`http://localhost:5000/api`](http://localhost:5000/api).

---

### 📁 Estrutura de Pastas
    .
    ├── eslint.config.js
    ├── index.html
    ├── node_modules
    │   ├── acorn
    │   ├── acorn-jsx
    │   ├── ajv
    │   ├── @ampproject
    │   ├── ansi-styles
    │   ├── argparse
    │   ├── @babel
    │   ├── balanced-match
    │   ├── brace-expansion
    │   ├── browserslist
    │   ├── callsites
    │   ├── caniuse-lite
    │   ├── chalk
    │   ├── clsx
    │   ├── color-convert
    │   ├── color-name
    │   ├── concat-map
    │   ├── convert-source-map
    │   ├── cookie
    │   ├── cross-spawn
    │   ├── csstype
    │   ├── debug
    │   ├── deep-is
    │   ├── dom-helpers
    │   ├── electron-to-chromium
    │   ├── @emotion
    │   ├── @esbuild
    │   ├── esbuild
    │   ├── escalade
    │   ├── escape-string-regexp
    │   ├── @eslint
    │   ├── eslint
    │   ├── @eslint-community
    │   ├── eslint-plugin-react-hooks
    │   ├── eslint-plugin-react-refresh
    │   ├── eslint-scope
    │   ├── eslint-visitor-keys
    │   ├── espree
    │   ├── esquery
    │   ├── esrecurse
    │   ├── estraverse
    │   ├── esutils
    │   ├── fast-deep-equal
    │   ├── fast-json-stable-stringify
    │   ├── fast-levenshtein
    │   ├── file-entry-cache
    │   ├── find-up
    │   ├── flat-cache
    │   ├── flatted
    │   ├── gensync
    │   ├── globals
    │   ├── glob-parent
    │   ├── has-flag
    │   ├── @humanfs
    │   ├── @humanwhocodes
    │   ├── ignore
    │   ├── import-fresh
    │   ├── imurmurhash
    │   ├── isexe
    │   ├── is-extglob
    │   ├── is-glob
    │   ├── @jridgewell
    │   ├── jsesc
    │   ├── json5
    │   ├── json-buffer
    │   ├── json-schema-traverse
    │   ├── json-stable-stringify-without-jsonify
    │   ├── js-tokens
    │   ├── js-yaml
    │   ├── keyv
    │   ├── levn
    │   ├── locate-path
    │   ├── lodash.merge
    │   ├── loose-envify
    │   ├── lru-cache
    │   ├── minimatch
    │   ├── ms
    │   ├── @mui
    │   ├── nanoid
    │   ├── natural-compare
    │   ├── node-releases
    │   ├── object-assign
    │   ├── optionator
    │   ├── parent-module
    │   ├── path-exists
    │   ├── path-key
    │   ├── picocolors
    │   ├── p-limit
    │   ├── p-locate
    │   ├── @popperjs
    │   ├── postcss
    │   ├── prelude-ls
    │   ├── prop-types
    │   ├── punycode
    │   ├── react
    │   ├── react-dom
    │   ├── react-is
    │   ├── react-refresh
    │   ├── react-router
    │   ├── react-router-dom
    │   ├── react-transition-group
    │   ├── regenerator-runtime
    │   ├── resolve-from
    │   ├── @rollup
    │   ├── rollup
    │   ├── scheduler
    │   ├── semver
    │   ├── set-cookie-parser
    │   ├── shebang-command
    │   ├── shebang-regex
    │   ├── source-map-js
    │   ├── strip-json-comments
    │   ├── stylis
    │   ├── supports-color
    │   ├── turbo-stream
    │   ├── type-check
    │   ├── @types
    │   ├── update-browserslist-db
    │   ├── uri-js
    │   ├── vite
    │   ├── @vitejs
    │   ├── which
    │   ├── word-wrap
    │   ├── yallist
    │   └── yocto-queue
    ├── package.json
    ├── package-lock.json
    ├── public
    │   └── vite.svg
    ├── README.md
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── assets
    │   ├── components
    │   ├── index.css
    │   ├── main.jsx
    │   ├── pages
    │   └── services
    └── vite.config.js
> 🧪 **Nota:** A pasta `node_modules` foi omitida na visualização por conter dependências instaladas via NPM.

---

### 📄 Páginas da Aplicação

#### 📋 Tabela

- Exibe a listagem de diagnósticos.
- Suporte a paginação e filtros por:
  - Total por página
  - Estado
  - Cidade

#### 📊 Gráfico

- Mostra gráfico em barras com os dados agrupados.
- Permite filtrar por:
  - Estado
  - Cidade

---

### 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)


