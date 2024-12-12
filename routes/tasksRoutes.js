const express = require('express');
const router = express.Router();
const tasks = require("../MOCK_DATA.json");

// Retornar el listado de todas las tareas...
router.get('/', (req, res) => {
	res.status(200).json(tasks);
});

// Retornar la tarea identificada con id...
router.get('/:id', (req, res) => {
	let tarea = tasks.find((task) => {
		return task.id == req.params.id;
	});
	res.status(200).json(tarea);
});

// Crear una tarea
router.post('/', (req, res) => {
	const body = req.body;
	tasks.push(body);
	//console.log(body);
	res.send("Tarea enviada!");
});
/**En postman, poner POST http://localhost:3000/tasks
 * body -> raw ->
 * {
	"id": "1",
	"title": "Esto es una prueba",
	"description": "Esto es la descripcion",
	"start": "17/8/2024",
	"end": "21/10/2024",
	"status": "done",
	"geo-long": 21.5587544,
	"geo-lat ": -4.8531154
}
*/

// Editar la tarea identificada con id...
router.put('/:id', (req, res) => {
	const infoActualizada = req.body;
	const id = req.params.id;
	const index = tasks.findIndex((task) => task.id == id);

	if (index !== -1) {
		tasks[index] = { ...tasks[index], ...infoActualizada };
		res.status(200).json(tasks[index]);

	} else {
		res.status(404).send("Tarea no encontrada :(");
	}
});
/** PUT ->  http://localhost:3000/tasks/(poner un id especificado)
 * body -> raw ->
 * {
	"description": "Esto es la descripcion editada!"
}
*/


// Eliminar la tarea identificada con id...
router.delete('/:id', (req, res) => {
	const id = req.params.id;
	const index = tasks.findIndex((task) => task.id == id);

	if (index !== -1) {
		tasks.splice(index, 1);  // Elimina el elemento del array
		res.status(200).json({ message: `Tarea con id ${id} eliminada` });
	} else {
		res.status(404).send("Tarea no encontrada");
	}
});
/** DELETE->  http://localhost:3000/tasks/(poner un id especificado)*/

module.exports = router;