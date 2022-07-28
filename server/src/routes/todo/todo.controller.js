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

async function httpUpsertTodo(req, res) {
    const todo = { ...req.body, userId: req.user.id };

    if (!isTodoValid(todo)) {
        return res.status(400).json({
            error: 'Missing required todo property',
        });
    }

    const existingTodo = await getTodoById(todo.id);
    if (existingTodo && existingTodo.userId !== req.user.id) {
        return res.status(400).json({
            error: 'You are not the owner of this todo.',
        });
    }

    if (existingTodo && existingTodo.dateModified > todo.dateModified) {
        return res.status(400).json({
            error: 'Newer version of todo already exists',
        });
    }

    const dbTodo = await upsertTodo(todo);
    return res.status(201).json(dbTodo);
}

async function httpDeleteTodo(req, res) {
    const todoId = req.params.id;
    const userId = req.user.id;

    const deleted = await deleteTodoById(todoId, userId);
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
    const userId = req.user.id;

    const deleted = await deleteManyTodos(todoIdArr, userId);
    if (!deleted) {
        return res.status(400).json({
            error: 'Failure bulk deleting todos',
        });
    }

    return await httpGetAllActiveTodos(req, res);
}

async function httpGetAllActiveTodos(req, res) {
    const userId = req.user.id;
    const { skip, limit } = getPagination(req.query);
    const todos = await getAllActiveTodos(userId, skip, limit);
    return res.status(200).json(todos);
}

module.exports = {
    httpUpsertTodo,
    httpDeleteTodo,
    httpDeleteManyTodos,
    httpGetAllActiveTodos
};