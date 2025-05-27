// src/config/database.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    logging: false,
  }
);

try {
  await sequelize.authenticate();
  console.log('✅ Conexão com o banco de dados foi bem-sucedida.');
} catch (error) {
  console.error('❌ Não foi possível conectar ao banco de dados:', error.message);
}

export default sequelize;
