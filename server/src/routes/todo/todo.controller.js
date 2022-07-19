const {
    getUserByProviderId,
    upsertUser
} = require('../../models/users.model');

const {
    getPagination,
} = require('../../utils/query');

// TODO
function isUserValid(user) {
    return true;
}


// Used by oath verifyCallback to upsert user in DB from cookie
async function storeUser(userProfile) {
    if (!isUserValid(userProfile)) {
        // TODO
    }

    const user = {
        provider: userProfile.provider,
        providerId: userProfile.id,
        name: userProfile.displayName,
        photoURL: userProfile.photos[0] ? userProfile.photos[0].value : "",
        email: userProfile.emails[0] ? userProfile.emails[0].value : ""
    };

    return await upsertUser(user);
}


async function httpGetUser(req, res) {
    const dbUser = await getUserByProviderId(req.user.provider, req.user.id);
    return res.status(200).json(dbUser);
}


module.exports = {
    storeUser,
    httpGetUser
};