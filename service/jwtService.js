const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const DataNotFoundException = require('../exceptions/DataNotFoundException.js');


class JwtService{
    async signIn(user){
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let mail = user.email;
        const userObj = await User.findOne({email:mail});
        if(!userObj){
            throw new DataNotFoundException('Invalid User Email',404)
        }
        if(user.password != userObj.password){
            throw new Error("Invalid Password");
        }
        const token = jwt.sign({ userId: user.email }, jwtSecretKey, {
            expiresIn: '1h',
        });
        return token;

    }

    async validateToken(token){
        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;

        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            // return { valid: true, user: verified };
        } else {
            // throw new Error('Invalid token');
        }
    }
}

const jwtService = new JwtService();
module.exports = jwtService