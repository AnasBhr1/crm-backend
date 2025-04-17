const Lead = require('../models/lead.model');

// Get leads assigned to this manager
const getManagerLeads = async (req, res) => {
  const { userId } = req.user; // Assuming userId is attached to req.user after authentication

  try {
    const leads = await Lead.find({ managerId: userId });
    res.json(leads);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update lead status
const updateLeadStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const lead = await Lead.findById(id);
    if (!lead) return res.status(404).json({ msg: 'Lead not found' });

    if (lead.managerId.toString() !== req.user.userId.toString()) {
      return res.status(403).json({ msg: 'You can only update your own leads' });
    }

    lead.status = status;
    await lead.save();

    res.json(lead);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { getManagerLeads, updateLeadStatus };
