import express from "express";
import todosRouter from "./routers/todos.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/",(req,res)=>{
    return res.json("Welcome to the ToDo List App")
})

app.use(todosRouter);

app.listen(3300,()=>{
    console.log("TODO list is hosting at Port 3300")
})