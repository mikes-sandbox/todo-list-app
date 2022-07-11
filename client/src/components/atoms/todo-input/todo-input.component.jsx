import React from 'react';

import './todo-input.styles.scss';

const TodoInput = ({ value, handleChange, ...otherProps }) => (
    <div className="todo-input-wrapper">
        <input
            {...otherProps}
            value={value}
            placeholder="Create a new todo..."
            className='todo-input'
            onChange={handleChange} />
    </div>
);

export default TodoInput;