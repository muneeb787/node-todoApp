const todos = [
    // {
    //     id: 1,
    //     title: "Complete the Task",
    //     description: "Complete the # videos Related to #D moudling",
    //     status: "Completed" 
    // },
    // {
    //     id: 2,
    //     title: "Complete the Task",
    //     description: "Complete the # videos Related to #D moudling",
    //     status: "Completed" 
    // },
    // {
    //     id: 3,
    //     title: "Complete the Task",
    //     description: "Complete the # videos Related to #D moudling",
    //     status: "Completed" 
    // }
]



const todoModel = {
    getAll: ()=>{
        return todos;
    },
    getTodosLength: ()=>{
        return todos.length;
    },
    getSpecificTodo: (id)=>{
        console.log(id)
        const findTodo = todos.find((todo) => todo.id == id);
        return findTodo;
    },
    addTodo: (todo)=>{
        todos.push(todo);
    },
    updateTodo: (id,data)=>{
        const findTodo = todos.find((todo) => todo.id == id);
        if(findTodo)
        {
            findTodo.title = data.title;
            findTodo.description = data.description;
            return true
        }
        else
        {
            return false
        }
    },
    deleteTodo: (id)=>{
        const findTodo = todos.findIndex((todo) => todo.id == id)
        console.log(findTodo);
        if(findTodo == -1)
        {
            return false;
        }
        else
        {
            todos.splice(findTodo, 1);
        }
    }
}

export default todoModel;