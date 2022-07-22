const {
    upsertTodo,
    getTodoById,
    deleteTodoById,
    deleteManyTodos,
    getAllActiveTodos
} = require('../../models/todos.model');

const {
    getPagination,
} = require('../../utils/query');

// TODO
function isTodoValid(todo) {
    return true;
}

async function httpCreateTodo(req, res) {
    const todo = req.body;

    if (!isTodoValid(todo)) {
        return res.status(400).json({
            error: 'Missing required todo property',
        });
    }

    const dbTodo = await upsertTodo(todo);
    return res.status(201).json(dbTodo);
}

async function httpDeleteTodo(req, res) {
    const todoId = req.params.id;

    // // Assumption is that we can ignore deletes for todos that dont exist in DB
    // const existsTodo = await getTodoById(todoId);
    // if (!existsTodo) {
    //     return res.status(404).json({
    //         error: 'Todo not found',
    //     });
    // }

    const deleted = await deleteTodoById(todoId);
    if (!deleted) {
        return res.status(400).json({
            error: 'Todo cannot be deleted',
        });
    }

    return res.status(200).json({
        ok: true,
    });
}

async function httpDeleteManyTodos(req, res) {
    const todoIdArr = req.body;

    const deleted = await deleteManyTodos(todoIdArr);
    if (!deleted) {
        return res.status(400).json({
            error: 'Launch not aborted',
        });
    }

    return await httpGetAllActiveTodos(req, res);
}

async function httpGetAllActiveTodos(req, res) {
    const { skip, limit } = getPagination(req.query);
    const todos = await getAllActiveTodos(skip, limit);
    return res.status(200).json(todos);
}

module.exports = {
    httpCreateTodo,
    httpDeleteTodo,
    httpDeleteManyTodos,
    httpGetAllActiveTodos
};