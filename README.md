
# 📦 Backend - Sistema de Gestão de Projetos e Coordenadores

Este é o backend do sistema de gerenciamento de projetos, coordenadores e cursos, desenvolvido em Node.js com Sequelize e Express. Ele fornece uma API RESTful que permite criar, editar e listar informações relacionadas aos projetos acadêmicos.

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **Express** – Framework web para Node.js
- **Sequelize** – ORM para integração com banco de dados relacional
- **PostgreSQL** – Banco de dados utilizado no ambiente de produção
- **Dotenv** – Gerenciamento de variáveis de ambiente
- **Nodemon** – Monitoramento de alterações durante o desenvolvimento
- **Sequelize CLI** – Gerador e executor de migrations e models

## 📁 Estrutura de Pastas

```
.
├── config/               # Configurações do banco (Sequelize)
├── controllers/          # Lógica dos endpoints da API
├── migrations/           # Scripts de criação/alteração de tabelas
├── models/               # Definições de Models do Sequelize
├── routes/               # Arquivo principal de rotas da API
├── seeders/              # Dados iniciais (se necessário)
├── .env                  # Variáveis de ambiente
├── server.js             # Arquivo principal do servidor
└── README.md             # Documentação do projeto
```

## 🧪 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repo-backend.git
cd nome-do-repo-backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
NODE_ENV=development
PORT=3000

```

> **Nota:** Você pode adaptar para PostgreSQL adicionando as variáveis abaixo:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=seu_banco
DB_DIALECT=postgres
```

### 4. Execute as migrations

```bash
npx sequelize-cli db:migrate
```

### 5. Inicie o servidor

```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:3000`

## 📌 Endpoints Principais

| Método | Rota                        | Descrição                          |
|--------|-----------------------------|------------------------------------|
| GET    | /projetos                   | Lista todos os projetos            |
| POST   | /projetos                   | Cria um novo projeto               |
| PUT    | /projetos/:id               | Atualiza um projeto existente      |
| DELETE | /projetos/:id               | Remove um projeto                  |
| GET    | /coordenadores              | Lista todos os coordenadores       |
| POST   | /coordenadores              | Cria um novo coordenador           |


## ✅ Funcionalidades

- Cadastro de projetos
- Vínculo de coordenadores aos projetos
- CRUD completo via API REST
- Integração com banco de dados relacional

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
