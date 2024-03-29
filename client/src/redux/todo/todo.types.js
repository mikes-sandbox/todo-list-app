const TodoActionTypes = {
    ADD_TODO_START: 'ADD_TODO_START',
    TOGGLE_TODO_COMPLETION_START: 'TOGGLE_TODO_COMPLETION_START',
    SAVE_TODO_SUCCESS: 'SAVE_TODO_SUCCESS',
    SAVE_TODO_FAILURE: 'SAVE_TODO_FAILURE',

    DELETE_TODO_START: 'DELETE_TODO_START',
    DELETE_TODO_SUCCESS: 'DELETE_TODO_SUCCESS',
    DELETE_TODO_FAILURE: 'DELETE_TODO_FAILURE',

    CLEAR_COMPLETED_START: 'CLEAR_COMPLETED_START',
    CLEAR_COMPLETED_SUCCESS: 'CLEAR_COMPLETED_SUCCESS',
    CLEAR_COMPLETED_FAILURE: 'CLEAR_COMPLETED_FAILURE',

    GET_ALL_ACTIVE_TODOS_START: 'GET_ALL_ACTIVE_TODOS_START',
    GET_ALL_ACTIVE_TODOS_SUCCESS: 'GET_ALL_ACTIVE_TODOS_SUCCESS',
    GET_ALL_ACTIVE_TODOS_FAILURE: 'GET_ALL_ACTIVE_TODOS_FAILURE',

    MERGE_TODOS_START: 'MERGE_TODOS_START',
    MERGE_TODOS_SUCCESS: 'MERGE_TODOS_SUCCESS',
    MERGE_TODOS_FAILURE: 'MERGE_TODOS_FAILURE',

    SAVE_UNSAVED_TODOS_START: 'SAVE_UNSAVED_TODOS_START',
    SAVE_UNSAVED_TODOS_SUCCESS: 'SAVE_UNSAVED_TODOS_SUCCESS',
    SAVE_UNSAVED_TODOS_FAILURE: 'SAVE_UNSAVED_TODOS_FAILURE',

    PURGE_TODOS: 'PURGE_TODOS',
};

export default TodoActionTypes;
