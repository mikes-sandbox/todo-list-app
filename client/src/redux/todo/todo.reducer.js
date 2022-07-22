import TodoActionTypes from "./todo.types";
import { EXAMPLE_TODOS } from "../../common/variables";
import { addTodo, toggleTodoCompletion, deleteTodo, clearCompleted, updateTodo, todoSuccessfullyDeleted, clearCompletedSuccess } from "./todo.utils";


const INITIAL_STATE = {
    activeTodos: EXAMPLE_TODOS,
};


const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO_START:
            return {
                ...state,
                activeTodos: addTodo(state.activeTodos, action.payload)
            };

        case TodoActionTypes.TOGGLE_TODO_COMPLETION_START:
            return {
                ...state,
                activeTodos: toggleTodoCompletion(state.activeTodos, action.payload)
            };


        case TodoActionTypes.DELETE_TODO_START:
            return {
                ...state,
                activeTodos: deleteTodo(state.activeTodos, action.payload),
            };

        case TodoActionTypes.DELETE_TODO_SUCCESS:
            return {
                ...state,
                activeTodos: todoSuccessfullyDeleted(state.activeTodos, action.payload)
            };


        case TodoActionTypes.CLEAR_COMPLETED_START:
            return {
                ...state,
                activeTodos: clearCompleted(state.activeTodos),
            };

        case TodoActionTypes.CLEAR_COMPLETED_SUCCESS:
            return {
                ...state,
                activeTodos: clearCompletedSuccess(state.activeTodos, action.payload)
            };


        case TodoActionTypes.ADD_TODO_SUCCESS:
        case TodoActionTypes.TOGGLE_TODO_COMPLETION_SUCCESS:
            return {
                ...state,
                activeTodos: updateTodo(state.activeTodos, action.payload)
            };


        // case TodoActionTypes.ADD_TODO_FAILURE:
        //     return {
        //         ...state,
        //         activeTodos: addTodo(state.activeTodos, action.payload)
        //     };


        default:
            return state;
    }
};

export default todoReducer;