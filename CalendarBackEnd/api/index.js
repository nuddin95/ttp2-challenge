const router = require('express').Router();

//Error Handler in case route does not exist
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});

module.exports = router;