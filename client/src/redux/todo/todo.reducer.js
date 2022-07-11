import { EXAMPLE_TODOS } from "../../common/variables";
import TodoActionTypes from "./todo.types";
import { addTodo } from "./todo.utils";

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

        default:
            return state;
    }
};

export default todoReducer;