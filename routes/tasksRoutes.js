const express = require("express");
const router = express.Router();
const taskController = require("../controller/task")

/**
 * @route GET /
 * @description Recupera todas las tareas disponibles
 * @access Público
 */
router.get('/', taskController.getAllTasks);

/**
 * @route GET /:id
 * @description Recupera una tarea específica por su ID
 * @access Público
 */
router.get('/:id', taskController.getTask);

/**
 * @route POST /
 * @description Crea una nueva tarea
 * @access Público
 */
router.post('/', taskController.createTask);

/**
 * @route PUT /:id
 * @description Actualiza una tarea existente por su ID
 * @access Público
 */
router.put('/:id', taskController.modifyTask);

/**
 * @route DELETE /:id
 * @description Elimina una tarea por su ID
 * @access Público
 */
router.delete('/:id', taskController.deleteTask);

module.exports = router;
