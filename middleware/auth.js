const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');

exports.protect = async (req, res, next) => {
  // 1) Getting token and check if its there
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } 
  if (!token) {
    return res.status(401).json({ message: "You are not logged in! Please log in to get access" });
  }
  // 2) Verify token
  const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);

  // 3) Check if user still exists
  
  const currentUser = await User.findOne({email : decoded.userId});
  if (!currentUser) {
    return res.status(401).json({ message: "The user belonging to this email does not exist" });
  }
  // Grant Access to protected route
  req.user = currentUser;
  next();
};

// exports.checkAdmin = async (req, res, next) => {
//     if (req.user && req.user.role === 'admin') {
//       next();
//     } else {
//       res.status(403).json({ message: 'Access denied' });
//     }
//   }