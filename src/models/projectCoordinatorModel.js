import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProjetoCoordenador = sequelize.define('ProjetoCoordenador', {
  codprojeto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  data_termino: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  codcoord: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nome_coord: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instituto_coord: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'projeto_coordenador',
  timestamps: true,
});

export default ProjetoCoordenador;