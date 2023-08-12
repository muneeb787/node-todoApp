import { Router } from "express";
import todosController from "../controller/todos.js";

const todosRouter = Router();
todosRouter.get("/todos" , todosController.getAll);

export default todosRouter;