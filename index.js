const express = require('express');
const app = express();
const port = 3000;
const tasksRoutes = require("./routes/tasks.routes");

app.use(express.json());
app.use("/tasks", tasksRoutes);

app.listen(port,
    () => console.log("Server is Ready! :D")
)

app.get('/',
    (req, res) => res.send('hola!')
);