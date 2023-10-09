import { Todo } from "./TodoApp"
// 一つ一つのTodoを表示するコンポーネント
// CompletedTodoList.tsxとUnCompletedTodoList.tsxの<li>部分をまとめる

type Props = {
  todo: Todo
  todoList: Todo[]
  setTodoList: (todoList: Todo[])=> void
}

function TodoItem(props: Props) {
  return (
          <li>
            { props.todo.isCompleted === true ? <s>{props.todo.title}</s> : props.todo.title}
            <button onClick={() => {
              const newTodoList = props.todoList.map(td => td === props.todo ? {...td, isCompleted: !td.isCompleted} : td)
              props.setTodoList(newTodoList)
            }}>{props.todo.isCompleted === false ? '完了' : '未完了'}</button>
            <button onClick={() => {
                const newTodoList = props.todoList.filter(td => td !== props.todo)
                props.setTodoList(newTodoList)
              }}>削除
            </button>
          </li>
  )
}

export default TodoItem
