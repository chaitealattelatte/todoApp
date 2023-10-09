import CompletedTodoList from "./CompletedTodoList"
import UnCompletedTodoList from "./UnCompletedTodoList"
import { Todo } from "./TodoApp"

type Props = {
  todoList: Todo[]
  setTodoList: (todoList: Todo[])=> void
}


function TodoList(props: Props) {

  return (
    <div style={{display:"flex",gap:"4px"}}>
      <UnCompletedTodoList todoList={props.todoList} setTodoList={props.setTodoList}/>
      <CompletedTodoList todoList={props.todoList} setTodoList={props.setTodoList}/>
    </div>
  )
}

export default TodoList