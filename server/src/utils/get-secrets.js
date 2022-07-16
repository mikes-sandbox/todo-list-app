
// loads secrets from CONFIG.SECRETS_PATH

const { SECRETS_PATH } = require('./config.js');

const { readFileSync } = require('fs');

let cachedSecrets = null;

function getSecrets() {

    if (cachedSecrets) { return cachedSecrets; }

    // NB: this is a syncronous file read, but that's fine as it's a small file 
    // that should only get read once on start up
    cachedSecrets = JSON.parse(readFileSync(SECRETS_PATH, 'utf8'));

    return cachedSecrets;

}

module.exports = getSecrets;
