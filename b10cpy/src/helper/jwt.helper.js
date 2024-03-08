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

module.exports = {
  generateToken,
};
