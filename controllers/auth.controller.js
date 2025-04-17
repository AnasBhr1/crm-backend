const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

console.log(user, user.password);
const hashedPassword = await bcrypt.hash(password, 10);
console.log(password, hashedPassword);


    const isMatch = await bcrypt.compare(password.toString(), user.password.toString());
    if (!isMatch) return res.status(400).json({ message: 'Invalid' });

    const token = jwt.sign({ userId: user._id, role: user.role }, 'your_jwt_secret', {
      expiresIn: '1d'
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
