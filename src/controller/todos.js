import todoModel from "../models/todos.js";

const todosController = {
    getAll: (req,res)=>{
        const todos = todoModel.getAll();
        if(todoModel.getTodosLength() < 1)
            return res.status(404).json({ success: false , message : "No Todo Find" })
        else
            return res.status(200).json({ success: true, data: todos });
    },
    getSpecificTodo: (req,res)=>{
        const id = req.params.id
        console.log("id is: " + id)     // Facing Error of Colon
        const todos = todoModel.getSpecificTodo(id);
        if(todos)
            return res.status(200).json({ success: true, data: todos });
        else
            return res.status(404).json({ success: false , message : "No Todo Find With Specified Id" })
    },
    addNewTodo: (req,res)=>{
        let newTodo = req.body;
        // let newId = Math.floor(Math.random() * 1000)
        let id = todoModel.getTodosLength() + 1;
        newTodo = {id , ...newTodo}
        newTodo.status = "false";
        todoModel.addTodo(newTodo);
        return res.status(200).json({ success: true , message : "Todo Added Successfull"});
    },
    updateTodo: (req,res)=>{
        const getId = req.params.id;
        const data = req.body;
        const status = todoModel.updateTodo(getId,data);
        if(status)
        {
            return res.status(200).json({ success: true , message : "Todo Updated Successfully"});
        }
        else
        {
            return res.status(200).json({ success: false , message : "No Todo found with specified id"});
        }
    },
    deleteTodo: (req,res)=>{
        const getId = req.params.id;
        const delStatus = todoModel.deleteTodo(getId);
        if(delStatus == false)
        {
            return res.status(200).json({ success: false , message :"No Todo Found"});
        }
        else
        {
            return res.status(200).json({ success: true , message :"Todo Deleted Successfully"})
        }
    }
}

export default todosController;