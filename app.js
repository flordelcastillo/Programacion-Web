// Importa el módulo mongoose para interactuar con MongoDB
const mongoose = require('mongoose');

// Carga las variables de entorno desde un archivo .env
require('dotenv').config();

// Importa el módulo express para crear el servidor web
const express = require('express'); 
const app = express();

// Define el puerto en el que el servidor escuchará, usando una variable de entorno o el puerto 3002 por defecto
const puerto = process.env.PORT || 3002;

// Importa las rutas de tareas desde el archivo task.router
const taskroutes = require("./routes/taskRoutes");

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Usa las rutas de tareas para las solicitudes que comienzan con "/tasks"
app.use("/tasks", taskroutes);

// Define una ruta raíz que responde con un mensaje simple
app.get("/", (req, res) => 
    res.send("¡Hola! Bienvenido a nuestra API de tareas.")
);

// Inicia el servidor y conecta a la base de datos MongoDB
app.listen(puerto, 
    (err, res) => {
        mongoose.connect(process.env.MONGOCONNECTION)
        console.log("¡Conexión exitosa a la base de datos y servidor en funcionamiento!")
        console.log(process.env.MONGOCONNECTION)
    }
);
