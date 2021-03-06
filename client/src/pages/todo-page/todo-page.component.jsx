import React, { useState } from "react";
import { connect, } from "react-redux";

import "./todo-page.styles.scss";
import { addTodo } from "../../redux/todo/todo.actions";
import TodoInput from "../../components/atoms/todo-input/todo-input.component";
import TodoList from '../../components/organisms/todo-list/todo-list.component';


const TodoPage = ({ addTodo }) => {

  const [newTodoString, setNewTodoString] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!newTodoString.trim()) return;
    addTodo(newTodoString);
    setNewTodoString("");
  };

  return (
    <div className="todo-page">
      <form onSubmit={handleSubmit} className="todo-list">
        <TodoInput
          value={newTodoString}
          handleChange={event => setNewTodoString(event.target.value)}
        />
        <TodoList />
      </form>

      <div className="footer">
        <p className="footer__note">Drag and drop to reorder list.</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todoString) => dispatch(addTodo(todoString)),
});

export default connect(null, mapDispatchToProps)(TodoPage);
