// helper/jwt.helper.js

const jwt = require('jsonwebtoken');

const generateToken = (userId, username, productIds) => {
  const secretKey = 'cnttvietnhatk17';

  const payload = {
    userId,
    username,
    productIds
  };

  const options = {
    expiresIn: '1h'
  };

  const token = jwt.sign(payload, secretKey, options);

  return token;
};

const verifyToken = (token) => {
    const secretKey = 'cnttvietnhatk17';
  
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    } catch (error) {
      console.error('JWT Verification Error:', error);
      return null;
    }
};

module.exports = {
  generateToken,
  verifyToken,
};
