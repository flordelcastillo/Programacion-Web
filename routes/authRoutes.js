const express = require("express");
const router = express.Router();
const { register, login } = require("../controller/auth");

/**
 * @route POST /register
 * @desc Registrar un nuevo usuario
 * @access Público
 */
router.post("/register", register);

/**
 * @route POST /login
 * @desc Iniciar sesión de usuario
 * @access Público
 */
router.post("/login", login);

/**
 * @route GET /login
 * @desc Método no permitido para inicio de sesión
 * @access Público
 */
router.get("/login", (req, res) => {
    res.status(405).json({
        error: "Método no permitido",
        message: "Por favor, utiliza el método POST para iniciar sesión con tu usuario y contraseña."
    });
});

// Exportar el router
module.exports = router;
