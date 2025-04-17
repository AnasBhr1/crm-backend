const User = require('../models/user.model');
const Lead = require('../models/lead.model');

// Get dashboard stats
const getDashboardStats = async (req, res) => {
  try {
    const leads = await Lead.find();
    const inProgress = leads.filter(lead => lead.status === 'IN_PROGRESS').length;
    const completed = leads.filter(lead => lead.status === 'COMPLETED').length;
    const canceled = leads.filter(lead => lead.status === 'CANCELED').length;

    res.json({
      inProgress,
      completed,
      canceled
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Create new manager
const createManager = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newManager = new User({ name, email, password, role: 'manager' });
    await newManager.save();
    res.status(201).json(newManager);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Manage leads (create, update, delete)
const manageLeads = async (req, res) => {
  // Logic for creating, updating, deleting leads goes here
};

module.exports = { getDashboardStats, createManager, manageLeads };
