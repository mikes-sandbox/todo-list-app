import React, { useState } from "react";
import { connect, } from "react-redux";

import "./todo-page.styles.scss";
import { addTodoStart } from "../../redux/todo/todo.actions";
import TodoInput from "../../components/atoms/todo-input/todo-input.component";
import TodoList from '../../components/organisms/todo-list/todo-list.component';

const TodoPage = ({ addTodoStart }) => {

  const [newTodoString, setNewTodoString] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!newTodoString.trim()) return;
    addTodoStart(newTodoString);
    setNewTodoString("");
  };

  return (
    <div className="todo-page">
      <form onSubmit={handleSubmit} className="todo-list">
        <TodoInput
          value={newTodoString}
          handleChange={event => setNewTodoString(event.target.value)}
        />
        <TodoList
          isLoading />
      </form>

      <div className="footer">
        <p className="footer__note">Coming Soon: Drag and drop to reorder list.</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodoStart: (todoString) => dispatch(addTodoStart(todoString)),
});

export default connect(null, mapDispatchToProps)(TodoPage);
