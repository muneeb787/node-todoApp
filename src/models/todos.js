const todos = [
    {
        id: 1,
        title: "Complete the Task",
        description: "Complete the # videos Related to #D moudling",
        status: "Completed" 
    }
]

const todoModel = {
    getAll: ()=>{
        return todos;
    }
}

export default todoModel;