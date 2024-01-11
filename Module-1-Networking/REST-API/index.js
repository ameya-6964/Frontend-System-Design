import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5111;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`I'm up!!`);
});

const todos = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
  { id: 4, title: "Task 3", completed: false },
  { id: 5, title: "Task 4", completed: false },
  { id: 6, title: "Task 5", completed: false },
  { id: 7, title: "Task 6", completed: false },
];

//READ
app.get("/todos", (req, res) => {
  res.json(todos);
});

//CREATE

app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.json({
    message: "New Todo Added",
  });
});

//UPDATE

app.put("/todos/:id", (req, res) => {
  const newTodoData = req.body;
  const todoParamId = Number(req.params.id);
  const todoIndex = todos.findIndex((td) => td.id === todoParamId);
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: todoParamId,
      ...newTodoData,
    };
  }
  res.json({
    message: "Todo Updated Successfully",
  });
});

//DELETE

app.delete("/todos/:id", (req, res) => {
  const newTodoData = req.body;
  const todoParamId = Number(req.params.id);
  const todoIndex = todos.findIndex((td) => td.id === todoParamId);

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }

  res.json({
    message: "Todo Deleted Successfully",
  });
});

app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});
