// Importa el módulo mongoose para interactuar con MongoDB
const mongoose = require('mongoose');
// Crea una instancia del esquema de mongoose
const Schema = mongoose.Schema;

// Define el esquema para las tareas
const taskSchema = new Schema({
    // Identificador único de la tarea
    id: {
        type: String,
        required: true,
        unique: true
    },
    // Título de la tarea
    title: {
        type: String,
        required: true
    },
    // Descripción detallada de la tarea (opcional)
    description: {
        type: String,
        required: false
    },
    // Fecha y hora de inicio de la tarea (por defecto, la fecha y hora actual)
    start: {
        type: Date,
        default: Date.now,
        required: false
    },
    // Fecha y hora de finalización de la tarea (opcional)
    end: {
        type: Date,
        required: false
    },
    // Estado actual de la tarea (opcional)
    status: {
        type: String,
        required: false
    },
    // Coordenada de longitud geográfica de la tarea (opcional)
    'geo-long': {
        type: Number,
        required: false
    },
    // Coordenada de latitud geográfica de la tarea (opcional)
    'geo-lat': {
        type: Number,
        required: false
    }
});

// Crea el modelo de tarea basado en el esquema definido
const Task = mongoose.model("Task", taskSchema);
// Exporta el modelo para su uso en otras partes de la aplicación
module.exports = Task;
