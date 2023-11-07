const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./apiRoutes');
const eventRoutes = require('./eventRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/events', eventRoutes);

module.exports = router;
