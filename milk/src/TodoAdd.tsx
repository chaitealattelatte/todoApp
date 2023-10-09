import { useState } from "react"
import { Todo } from "./TodoApp"


type Props = {
  todoList: Todo[]
  setTodoList: (todoList: Todo[])=> void
}
function TodoAdd(props: Props) {
  const [newTodoText, setNewTodoText] = useState("新しいTodo") 
  return (
    <>
      <button onClick={() => {
        const newTodoList = [...props.todoList, {title:newTodoText, isCompleted: false}]
        props.setTodoList(newTodoList) 
      }}>
          追加
      </button>
      <input value={newTodoText}
        onChange={(event) => {
          console.log("onChange")
          console.log(event.target.value)
          setNewTodoText(event.target.value)
        }}
      ></input>

    </>
  )
}

export default TodoAdd