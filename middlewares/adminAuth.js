require('dotenv').config();

const verifyAdmin = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(403).json({ message: 'Admin access only' });
  }
  next();
};

module.exports = verifyAdmin;
/**
 * const apiKey = process.env.ADMIN_API_KEY;

const verifyAdmin = (req, res, next) => {
    const adminKey = req.headers['x-api-key'];
    
    if (adminKey !== apiKey) {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
};

module.exports = verifyAdmin;

 */