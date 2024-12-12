const jwt = require("jsonwebtoken");

/**
 * Middleware para verificar el token de autenticación.
 * 
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 * @param {Function} next - Función para pasar al siguiente middleware.
 */
module.exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    /**
     * Verifica que el encabezado de autorización existe.
     * Si no existe, responde con un estado 403 (Prohibido).
     */
    if (!authHeader) {
        return res
            .status(403)
            .json({ message: "El token de autenticación es obligatorio" });
    }

    /**
     * Extrae el token del encabezado de autorización.
     * El encabezado tiene el formato "Bearer <token>", por lo que se divide y se toma la segunda parte.
     */
    const token = authHeader.split(" ")[1];

    /**
     * Verifica el token usando la clave secreta.
     * Si el token es inválido, responde con un estado 401 (No autorizado).
     * Si es válido, guarda la ID del usuario en la solicitud y pasa al siguiente middleware.
     */
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "El token no es válido" });
        }

        req.userId = decoded.id;
        next();
    });
};
