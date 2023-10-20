/*const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa la conexión a la base de datos

const Persona = sequelize.define('PERSONA', {
  dni: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false, 
  },
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  
});


Persona.sync();

module.exports = Persona;*/

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Persona = sequelize.define('persona', {
  dni: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
  },
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
}, {
  tableName: 'persona', // Especifica el nombre de la tabla en singular
  timestamps: false, // Deshabilita las marcas de tiempo (createdAt y updatedAt)
});

Persona.sync();

module.exports = Persona;