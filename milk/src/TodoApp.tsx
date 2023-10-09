import { useState } from "react"
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const array = [1, 2, 3];
const newArray = array.filter(num => num !== 1)
newArray // [2,3]
// array.push(4); // [1,2,3,4]
// const newArray = [...array,5] // [1,2,3,4,5]
// const newArray = [array,5] // [1,2,3,4,5]

// const func2 = () => "テスト"
 
export type Todo = {
  title: string
  isCompleted : boolean
}

function TodoApp() {
  // const todoList = ["掃除","勉強","洗濯","料理"]
  const [todoList, setTodoList] = useState<Todo[]>([{title: "掃除",isCompleted: false},{title: "勉強", isCompleted: false}, {title: "洗濯", isCompleted: true}])
  return (
    <>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
      <TodoAdd todoList={todoList}  setTodoList={setTodoList}/>
    </>
  )
}

export default TodoApp