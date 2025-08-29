const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Controller for Admin Authentication
exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Please provide both username and password' });
  }

  try {
    // Find admin
    const admin = await Admin.findOne({ username });
    if (!admin) {
      // Don't say "user not found" to avoid username enumeration
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Respond with token
    res.status(200).json({
      success: true,
      message: 'Login successful',
      token
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Server error, please try again later' });
  }
};
