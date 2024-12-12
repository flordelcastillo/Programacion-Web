const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Registro de usuario
module.exports.register = (req, res) => {
    const { email, username, password } = req.body;

    // Hashear la contraseña del usuario
    bcrypt
        .hash(password, 10)
        .then((hashedPassword) => {
            // Crear un nuevo usuario con la contraseña hasheada
            const newUser = new User({ email, username, password: hashedPassword });

            // Guardar el nuevo usuario en la base de datos
            return newUser.save();
        })
        .then(() => {
            // Responder con éxito
            res.status(201).json({ message: "El usuario ha sido registrado exitosamente." });
        })
        .catch((err) => {
            // Manejar errores en el registro
            res.status(500).json({ message: "Hubo un error al registrar el usuario.", error: err.message });
        });
};

// Autenticación de usuario (Login)
module.exports.login = (req, res) => {
    const { username, password } = req.body;

    // Buscar el usuario por el nombre de usuario
    User.findOne({ username })
        .then((user) => {
            if (!user) {
                // Usuario no encontrado
                return res.status(404).json({ message: "No se encontró el usuario." });
            }

            // Comparar la contraseña ingresada con la almacenada en la base de datos
            return bcrypt.compare(password, user.password).then((isMatch) => {
                if (!isMatch) {
                    // Contraseña incorrecta
                    return res.status(401).json({ message: "La contraseña es incorrecta." });
                }

                // Generar el token JWT
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: "2h",
                });

                // Enviar el token en la respuesta
                res.status(200).json({ token, message: "Inicio de sesión exitoso." });
            });
        })
        .catch((err) => {
            // Manejar errores en el inicio de sesión
            res.status(500).json({ message: "Hubo un error al iniciar sesión.", error: err.message });
        });
};
