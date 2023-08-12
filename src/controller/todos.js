import todoModel from "../models/todos.js";

const todosController = {
    getAll: (req,res)=>{
        const todos = todoModel.getAll();
        return res.json(todos);
    },
    getSpecificTodo: (req,res)=>{
        const id = req.params.id
        console.log("id is: " + id)     // Facing Error of Colon
        const todos = todoModel.getSpecificTodo(id);
        return res.json(todos);
    },
    addNewTodo: (req,res)=>{
        let newTodo = req.body;
        let newId = Math.floor(Math.random() * 1000)
        newTodo = {newId , ...newTodo}
        newTodo.status = "false";
        todoModel.addTodo(newTodo);
        return res.json("Todo Added Successfull");
    },
    updateTodo: (req,res)=>{
        const getId = req.params.id;
        const data = req.body;
        todoModel.updateTodo(getId,data);
        return res.json("Todo Updated Successfully");
    }
}

export default todosController;