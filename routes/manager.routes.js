const express = require('express');
const router = express.Router();
const { getManagerLeads, updateLeadStatus } = require('../controllers/manager.controller');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

// Protected routes for managers
router.use(auth);
router.use(role('manager'));

router.get('/leads', getManagerLeads);
router.patch('/leads/:id', updateLeadStatus);

module.exports = router;
