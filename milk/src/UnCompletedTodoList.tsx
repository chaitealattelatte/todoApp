import { Todo } from "./TodoApp"
import TodoItem from "./TodoItem"

type Props = {
  todoList: Todo[]
  setTodoList: (todoList: Todo[])=> void
}

function UnCompletedTodoList(props: Props) {

  return (
    <div style={{border:"solid", width: "300px",height:"450px"}}>
      {props.todoList
        .filter(td => td.isCompleted === false)
        .map((todo) => {
        return  (
          <TodoItem todo={todo} todoList={props.todoList} setTodoList={props.setTodoList}/>
       ) 
      }
      )}

    </div>
  )
}

export default UnCompletedTodoList