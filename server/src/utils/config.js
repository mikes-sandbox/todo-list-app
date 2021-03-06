// loads config from environment variables (also checks for correct type):
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '..', '..', `env-vars-${process.env.NODE_ENV || 'local'}.env`) });

function _getPositiveInteger(key, defaultValue) {

    const value = (process.env[key] || '').trim() || defaultValue.toString();

    // value will be a string, so let's check for existance:
    if (!value) {
        throw new Error(`Unable to load integer config value (not present): ${key}`);
    }

    const parsedValue = Number.parseInt(value);

    if (!Number.isInteger(parsedValue)) {
        throw new Error(`Unable to load integer config value (not integer): ${key}`);
    }

    if (parsedValue < 0 || parsedValue > Number.MAX_SAFE_INTEGER) {
        throw new Error(`Unable to load integer config value (not in range): ${key}`);
    }

    return parsedValue;

}

function _getNonEmptyString(key, defaultValue) {

    const value = (process.env[key] || '').trim() || defaultValue;

    if (!value) {
        throw new Error(`Unable to load string config value (not present): ${key}`);
    }

    return value;

}

function _getBoolean(key, defaultValue) {

    const value = (process.env[key] || '').trim().toLowerCase();

    if (value === 'true') { return true; }
    if (value === 'false') { return false; }

    if (typeof defaultValue === 'boolean') { return defaultValue; }

    throw new Error(`Unable to load boolean config value: ${key}`);

}

module.exports = {
    SECRETS_PATH: _getNonEmptyString('SECRETS_PATH'),
    CLIENT_PATH: _getNonEmptyString('CLIENT_PATH'),
    AUTH_SERVER: _getNonEmptyString('AUTH_SERVER'),
};
