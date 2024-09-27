import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem2 from "./components/TodoIteml2";
import TodoItem1 from "./components/TodoItem1";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
