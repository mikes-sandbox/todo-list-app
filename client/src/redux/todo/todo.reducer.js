import TodoActionTypes from "./todo.types";
import { EXAMPLE_TODOS } from "../../common/variables";
import { addTodo, toggleTodoCompletion, deleteTodo } from "./todo.utils";


const INITIAL_STATE = {
    todos: EXAMPLE_TODOS
};


const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return {
                ...state,
                todos: addTodo(state.todos, action.payload)
            };

        case TodoActionTypes.TOGGLE_TODO_COMPLETION:
            return {
                ...state,
                todos: toggleTodoCompletion(state.todos, action.payload)
            };

        case TodoActionTypes.DELETE_TODO:
            return {
                ...state,
                todos: deleteTodo(state.todos, action.payload)
            };

        default:
            return state;
    }
};

export default todoReducer;