const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');

exports.protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } 
  if (!token) {
    return res.status(401).json({ message: "You are not logged in! Please log in to get access" });
  }
  let decoded;
  let currentUser;
  try{
    decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    currentUser = await User.findOne({email : decoded.userId});
    
    if (!currentUser) {
      return res.status(401).json({ message: "The user belonging to this email does not exist" });
    }
    req.user = currentUser;
    next();
  }catch(err){
    res.status(403).send("Token Is Expired")
  }
};