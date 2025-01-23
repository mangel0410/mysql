const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


// Configuración del motor de vistas
app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); // Carpeta donde están las vistas

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

app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ejemplo con res.send()</title>
      </head>
      <body>
        <h1>Hola desde res.send()</h1>
        <p>Esto es contenido dinámico.</p>
      </body>
      </html>
    `);
  });
  

// Endpoint de prueba
app.get('/api/datos', (req, res) => {
    db.query('select * from personas', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
            console.log(results);
            //res.render('hola', { mensaje: 'Hello World' });

        }
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
