import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './todo-list.styles.scss';
import { FILTERS } from '../../../common/variables';
import Todo from '../../molecules/todo/todo.component';
import { selectTodoList } from '../../../redux/todo/todo.selectors';


const TodoList = ({ todoList }) => {

    const [filter, setFilter] = useState(FILTERS.ALL);
    const [filteredTodos, setfilteredTodos] = useState([]);
    const [itemsLeft, setItemsLeft] = useState(0);

    useEffect(() => {
        setfilteredTodos(filterTodos(filter, todoList));
        setItemsLeft(todoList.filter((todo) => !todo.completed).length);
    }, [filter, todoList]);

    return (
        <div className="todo-list-container">

            <ul className="todo-list__list">
                {
                    filteredTodos.length ? (
                        filteredTodos.map(todo => (
                            <Todo key={todo.id} todo={todo} />
                        ))) : (
                        <span className="no-items">Whoops! There are no todos here...</span>
                    )
                }
            </ul>

            <div className="todo-list__footer">
                <span className="items-left">
                    {itemsLeft} {itemsLeft === 1 ? 'item' : 'items'} left
                </span>

                <div className="filter-options">
                    <button className={`filter ${filter === FILTERS.ALL ? "active" : ''}`}
                        onClick={() => setFilter(FILTERS.ALL)}>All</button>
                    <button className={`filter ${filter === FILTERS.ACTIVE ? "active" : ''}`}
                        onClick={() => setFilter(FILTERS.ACTIVE)}>Active</button>
                    <button className={`filter ${filter === FILTERS.COMPLETED ? "active" : ''}`}
                        onClick={() => setFilter(FILTERS.COMPLETED)}>Completed</button>
                </div>

                <button className="clear-completed">
                    Clear Completed
                </button>

            </div>

        </div>

    );
};

const filterTodos = (filter, todoList) => {
    switch (filter) {
        case FILTERS.ACTIVE:
            return todoList.filter(todo => { return !todo.completed; });
        case FILTERS.COMPLETED:
            return todoList.filter(todo => { return todo.completed; });
        default:
            return todoList;
    }
};

const mapStateToProps = createStructuredSelector({
    todoList: selectTodoList,
});


export default connect(mapStateToProps, null)(TodoList);