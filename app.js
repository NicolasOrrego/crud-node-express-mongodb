const express = require('express');
const app = express();
require('dotenv').config()
require('./src/database/db');

//* Iniciar servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto: ${port}`);
});

