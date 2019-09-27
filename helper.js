"use strict"

function promisify(fn) {
    return function () {
        return new Promise((resolve, reject) => {
            return fn(...Array.from(arguments), response => resolve(response));
        });
    };
}

module.exports = promisify;
