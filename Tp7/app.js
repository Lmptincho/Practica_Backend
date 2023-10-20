const express = require('express');
const app = express();
const personaRoutes = require('./routes/personaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');


// Asocia las rutas a rutas específicas
app.use('/personas', personaRoutes);
app.use('/usuarios', usuarioRoutes);

// Otros ajustes y configuraciones del servidor
// ...

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
