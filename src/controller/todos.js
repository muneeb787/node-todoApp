import todoModel from "../models/todos.js";

const todosController = {
    getAll: (req,res)=>{
        const todos = todoModel.getAll();
        return res.json(todos);
    }
}

export default todosController;