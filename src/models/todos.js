const todos = [
    {
        id: 1,
        title: "Complete the Task",
        description: "Complete the # videos Related to #D moudling",
        status: "Completed" 
    },
    {
        id: 2,
        title: "Complete the Task",
        description: "Complete the # videos Related to #D moudling",
        status: "Completed" 
    },
    {
        id: 3,
        title: "Complete the Task",
        description: "Complete the # videos Related to #D moudling",
        status: "Completed" 
    }
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
        console.log(findTodo);
        return findTodo;
    },
    todo: (todo)=>{
        todos.push(todo);
    }
}

export default todoModel;