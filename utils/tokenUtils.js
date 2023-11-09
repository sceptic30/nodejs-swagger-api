const jwt = require('jsonwebtoken');
const config = require('./config'); // Update the path if needed
const secretKey = config.secretKey; // Make sure this matches the property in your config file

const generateToken = (user) => {
  const payload = {
    // Populate the payload with user data, expiration, and other claims
    userId: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: '24h', // Token expiration time (e.g., 24 hours)
  };

  return jwt.sign(payload, secretKey, options);
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null; // Token is invalid or has expired
  }
};

module.exports = { generateToken, verifyToken };