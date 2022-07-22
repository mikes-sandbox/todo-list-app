const todosDatabase = require('./todos.mongo');

async function findTodo(filter) {
    return await todosDatabase.findOne(filter);
}

async function getTodoById(id) {
    return await findTodo({
        id,
    });
}

async function upsertTodo(todo) {
    const dbTodo = await todosDatabase.findOneAndUpdate({
        id: todo.id,
    }, todo, {
        upsert: true,
        new: true
    });
    return dbTodo;
}

async function deleteTodoById(todoId) {
    const deleteResponse = await todosDatabase.updateOne({
        id: todoId,
    }, {
        isDeleted: true,
    });

    return deleteResponse.acknowledged;
}

async function deleteManyTodos(todoIdArr) {
    const deleteResponse = await todosDatabase.updateMany({
        id: { "$in": todoIdArr },
    }, {
        isDeleted: true,
    });

    return deleteResponse.acknowledged;
}

async function getAllActiveTodos(skip, limit) {
    return await todosDatabase
        .find({ isDeleted: false }, {})
        // .sort({})
        .skip(skip)
        .limit(limit);
}


module.exports = {
    getTodoById,
    upsertTodo,
    deleteTodoById,
    deleteManyTodos,
    getAllActiveTodos
};
