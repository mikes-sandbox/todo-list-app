const {
    existsUserWithProviderId,
    createUser
} = require('../../models/users.model');

const {
    getPagination,
} = require('../../services/query');

// TODO
function isUserValid(user) {
    return true;
}

async function httpGetExistingUser(profile) {
    const {
        provider: provider,
        id: providerId,
    } = profile;
    return await existsUserWithProviderId(provider, providerId);
}

async function httpStoreUser(userProfile) {
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

    return await createUser(user);
}

module.exports = {
    httpGetExistingUser,
    httpStoreUser
};