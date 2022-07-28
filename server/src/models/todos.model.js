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
        userId: todo.userId
    }, todo, {
        upsert: true,
        new: true
    });
    return dbTodo;
}

async function deleteTodoById(todoId, userId) {
    const deleteResponse = await todosDatabase.updateOne({
        id: todoId,
        userId
    }, {
        isDeleted: true,
    });
    return deleteResponse.acknowledged;
}

async function deleteManyTodos(todoIdArr, userId) {
    const deleteResponse = await todosDatabase.updateMany({
        id: { "$in": todoIdArr },
        userId
    }, {
        isDeleted: true,
    });

    return deleteResponse.acknowledged;
}

async function getAllActiveTodos(userId, skip, limit) {
    return await todosDatabase
        .find({
            userId,
            isDeleted: false
        }, {})
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
