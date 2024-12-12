// Importa el módulo de mongoose
const mongoose = require("mongoose");

// Define el esquema para el modelo de usuario
const userSchema = mongoose.Schema({
    // Dirección de correo electrónico del usuario
    email: {
        type: String, // Tipo de dato: cadena de texto
        required: true // Campo obligatorio
    },
    // Nombre de usuario
    username: {
        type: String, // Tipo de dato: cadena de texto
        required: true // Campo obligatorio
    },
    // Contraseña del usuario
    password: {
        type: String, // Tipo de dato: cadena de texto
        required: true // Campo obligatorio
    }
});

// Exporta el modelo de usuario basado en el esquema definido
module.exports = mongoose.model('user', userSchema);
