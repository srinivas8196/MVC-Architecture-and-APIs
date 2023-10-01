const User = require('../models/User');
const bcrypt = require('bcryptjs');

async function signup(req, res) {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function login(req, res) {
  // Implement login logic here
}

module.exports = { signup, login };