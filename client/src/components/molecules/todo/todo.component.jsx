import React from 'react';
import { connect } from 'react-redux';

import './todo.styles.scss';
import { ReactComponent as IconCheck } from '../../../assets/icon-check.svg';
import { ReactComponent as IconCross } from '../../../assets/icon-cross.svg';
import { deleteTodoStart, toggleTodoCompletionStart } from '../../../redux/todo/todo.actions';


const Todo = ({ todo, deleteTodoStart, toggleTodoCompletionStart }) => (
    <li className={`todo ${todo.completed ? 'completed' : ''}`} >

        <label
            htmlFor={`checkbox-${todo.id}`}
            className='todo__contents'>
            <input
                onClick={() => toggleTodoCompletionStart(todo)}
                type="checkbox"
                id={`checkbox-${todo.id}`}
                className="todo--checkbox" />
            <span className="fake-checkbox-wrapper">
                <span className="fake-checkbox">
                    <IconCheck className='icon-check'></IconCheck>
                </span>
            </span>
            <span className="todo--label">{todo.name}</span>
        </label>

        <button className="todo--close"
            type="button"
            onClick={() => deleteTodoStart(todo)}>
            <IconCross></IconCross>
        </button>
    </li>
);

const mapDispatchToProps = dispatch => ({
    deleteTodoStart: todo => dispatch(deleteTodoStart(todo)),
    toggleTodoCompletionStart: todo => dispatch(toggleTodoCompletionStart(todo)),
});

export default connect(null, mapDispatchToProps)(Todo);
