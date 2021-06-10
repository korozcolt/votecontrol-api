'use strict'

exports.notFound = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
}

exports.errorHandler = (err, req, res, next) => {
    err.stack = err.stack || '';

    const errorDetails = {
        message: err.message,
        status: err.status ? err.status : 500
    };

    res.status(err.status || 400).json(errorDetails);
}

exports.handlerFatalError = (err) => {
    console.log(`Fatal Server Error: ${err.message}`);
    process.exit(1);
}