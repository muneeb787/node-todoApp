import { Router } from "express";
import todosController from "../controller/todos.js";

const todosRouter = Router();

todosRouter.get("/todos" , todosController.getAll);
todosRouter.get("/todos/:id" , todosController.getSpecificTodo);
todosRouter.post("/todos" , todosController.addNewTodo);
todosRouter.post("/todos/:id" , todosController.updateTodo);

export default todosRouter;