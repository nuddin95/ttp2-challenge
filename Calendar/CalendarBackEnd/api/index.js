const router = require('express').Router();

router.use('/events', require('./events'))

//Error Handler in case route does not exist
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});

module.exports = router;