const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: 'bi2tratauexzwhxfvhvf-mysql.services.clever-cloud.com',
    user: 'udn4zcbscckqe8hv',
    password: 'yFZXJjCUiukocAc9aUtk',
    database: 'bi2tratauexzwhxfvhvf',
});

db.connect((err) => {
    if (err) {
        console.error('Error al conectar a MySQL:', err);
        return;
    }
    console.log('Conexión exitosa a MySQL');
});

// Endpoint de prueba
app.get('/api/datos', (req, res) => {
    db.query('select * from personas', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
            console.log(results);
            
        }
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
