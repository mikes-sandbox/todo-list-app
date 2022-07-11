import React from 'react';
import './todo.styles.scss';

import { ReactComponent as IconCheck } from '../../../assets/icon-check.svg'
import { ReactComponent as IconCross } from '../../../assets/icon-cross.svg'

const Todo = ({ todo }) => (
    <li className={`todo ${todo.completed ? 'completed' : ''}`} >

        <label
            htmlFor={`checkbox-${todo.id}`}
            className='todo__contents'>
            <input
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
            type="button">
            <IconCross></IconCross>
        </button>
    </li>
);

export default Todo;
