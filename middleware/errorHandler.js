const errorHandler = (err, req, res, next) => {
    const statuscode = res.statuscode ? res.statuscode : 500;
    res.json({message: err.message, stackTracer: err.stack});
}

module.exports = errorHandler;