const jwt = require('jsonwebtoken')

module.exports = {
    generateToken: (payload) => {
        const token = jwt.sign(payload,  "secret", {
            expiresIn: 60 * 60 * 5
        })
        return token;
    },
    verifyToken: (token) => {
        const verify = jwt.verify(token, "secret")
        return verify
    }
}