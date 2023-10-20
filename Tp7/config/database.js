const { Sequelize } = require('sequelize');

// Configura la conexión a la base de datos
const sequelize = new Sequelize('backend', 'root', 'Lmptincho1', {
  host: 'localhost',
  dialect: 'mysql', 
});

// Prueba la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((err) => {
    console.error('Error de conexión a la base de datos:', err);
});

module.exports = sequelize;

