import TodoActionTypes from "./todo.types";
import {
    addTodo,
    toggleTodoCompletion,
    deleteTodo,
    clearCompleted,
    updateTodo,
    todoSuccessfullyDeleted,
} from "./todo.utils";


const INITIAL_STATE = {
    todos: [],
};


const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO_START:
            return {
                ...state,
                todos: addTodo(state.todos, action.payload)
            };

        case TodoActionTypes.TOGGLE_TODO_COMPLETION_START:
            return {
                ...state,
                todos: toggleTodoCompletion(state.todos, action.payload)
            };


        case TodoActionTypes.DELETE_TODO_START:
            return {
                ...state,
                todos: deleteTodo(state.todos, action.payload),
            };

        case TodoActionTypes.DELETE_TODO_SUCCESS:
            return {
                ...state,
                todos: todoSuccessfullyDeleted(state.todos, action.payload)
            };


        case TodoActionTypes.CLEAR_COMPLETED_START:
            return {
                ...state,
                todos: clearCompleted(state.todos),
            };


        case TodoActionTypes.MERGE_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload
            };


        case TodoActionTypes.SAVE_TODO_SUCCESS:
            return {
                ...state,
                todos: updateTodo(state.todos, action.payload)
            };

        case TodoActionTypes.PURGE_TODOS:
            return {
                ...state,
                todos: []
            };

        // case TodoActionTypes.ADD_TODO_FAILURE:
        //     return {
        //         ...state,
        //         todos: addTodo(state.todos, action.payload)
        //     };


        default:
            return state;
    }
};

export default todoReducer;