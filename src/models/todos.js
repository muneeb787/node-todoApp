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
        return findTodo;
    },
    addTodo: (todo)=>{
        todos.push(todo);
    },
    updateTodo: (id,data)=>{
        const findTodo = todos.find((todo) => todo.id == id);
        findTodo.title = data.title;
        findTodo.description = data.description;
    }
}

export default todoModel;