const usersDatabase = require('./users.mongo');

async function findUser(filter) {
    return await usersDatabase.findOne(filter);
}

// async function existsUserWithProviderId(provider, providerId) {
//     return await findUser({
//         provider,
//         providerId
//     });
// }

async function upsertUser(user) {
    return await usersDatabase.findOneAndUpdate({
        provider: user.provider,
        providerId: user.providerId,
    }, user, {
        upsert: true,
    });
}

module.exports = {
    upsertUser,
};
