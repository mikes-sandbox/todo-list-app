
function makeError(errCode, errMsg, additionalData) {

    const errorResponse = {
        err_code: errCode,
        err_msg: errMsg
    };

    if (additionalData) {
        Object.assign(errorResponse, additionalData);
    }

    return errorResponse;

};

module.exports = makeError;
