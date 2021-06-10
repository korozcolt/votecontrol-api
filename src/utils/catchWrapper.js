"use strict"

module.exports = function catchWrapper(originalFunction) {
    return function(req, res, next) {
        try {
            return originalFunction.call(this, req, res, next);
        } catch (e) {
            next(e);
        }
    };
};