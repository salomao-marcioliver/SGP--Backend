# 📦 Backend - Sistema de Gestão de Projetos (SGP)

Este é o backend do sistema SGP, desenvolvido em **Node.js (Express.js)**, utilizando **Prisma ORM** para acesso ao banco de dados PostgreSQL.

## 📁 Estrutura do Projeto

```
SGP/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── controllers/
│   ├── lib/
│   ├── routes/
│   └── index.js
├── .env
├── package.json
└── README.md
```

## 🚀 Tecnologias

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT (Autenticação)
- Nodemon (Ambiente de desenvolvimento)

---

## ⚙️ Pré-requisitos

- Node.js (v18 ou superior)
- PostgreSQL
- npm ou yarn

---

## 🔧 Configuração Inicial

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/sgp-backend.git
cd sgp-backend
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar o banco de dados

Crie um banco PostgreSQL chamado `sgp_db` (ou o nome que preferir).

Depois, configure o arquivo `.env`:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/sgp_db?schema=public"
JWT_SECRET="seu_segredo_jwt"
```

### 4. Gerar o cliente Prisma e aplicar migrações

```bash
npx prisma migrate dev --name init
```

> Isso criará as tabelas necessárias no banco com base no `schema.prisma`.

---

## ▶️ Rodar o servidor em modo dev

```bash
npm run dev
```

> O servidor será iniciado em `http://localhost:3000`.

---

## 🛠 Rotas disponíveis

### Autenticação

| Método | Rota        | Descrição          |
|--------|-------------|--------------------|
| POST   | `/login`    | Realiza login JWT  |

### Projetos

| Método | Rota            | Descrição                 |
|--------|------------------|---------------------------|
| GET    | `/projetos`      | Lista todos os projetos   |
| POST   | `/projetos`      | Cria um novo projeto      |
| PUT    | `/projetos/:id`  | Atualiza um projeto       |
| DELETE | `/projetos/:id`  | Remove um projeto         |

### Bolsistas

| Método | Rota             | Descrição                   |
|--------|------------------|-----------------------------|
| GET    | `/bolsistas`     | Lista todos os bolsistas    |
| POST   | `/bolsistas`     | Cria um novo bolsista       |
| PUT    | `/bolsistas/:id` | Atualiza um bolsista        |
| DELETE | `/bolsistas/:id` | Remove um bolsista          |

---

## 🧪 Testar API

Você pode usar o [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para testar os endpoints.

---

## 📌 Observações

- O campo `num_matricula` é **único** no banco de dados.
- Use o token JWT retornado no login para autenticar rotas protegidas (`Authorization: Bearer SEU_TOKEN`).

---

## 📄 Licença

Este projeto é acadêmico e livre para fins educacionais.