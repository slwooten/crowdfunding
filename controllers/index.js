const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/api', apitRoutes);
router.use('/', homeRoutes);

module.exports = router;
