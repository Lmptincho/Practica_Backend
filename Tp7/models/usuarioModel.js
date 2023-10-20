/*const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa la conexión a la base de datos

const Usuario = sequelize.define('USUARIO', {
  mail: {
    type: DataTypes.STRING(40),
    primaryKey: true,
  },
  nickname: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  // Otros campos y relaciones si es necesario
});

// Sincroniza el modelo con la base de datos (crea la tabla si no existe)
Usuario.sync();

module.exports = Usuario;*/

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('USUARIO', {
  mail: {
    type: DataTypes.STRING(40),
    primaryKey: true,
  },
  nickname: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
}, {
  tableName: 'usuario', // Especifica el nombre de la tabla en singular
  timestamps: false, // Deshabilita las marcas de tiempo (createdAt y updatedAt)
});

Usuario.sync();

module.exports = Usuario;