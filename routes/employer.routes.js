const express = require('express');
const router = express.Router();
const { getDashboardStats, createManager, manageLeads } = require('../controllers/employer.controller');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

// Protected routes for employers
router.use(auth);
router.use(role('employer'));

router.get('/dashboard-stats', getDashboardStats);
router.post('/managers', createManager);
router.post('/leads', manageLeads);

module.exports = router;
