const jwt = require('jsonwebtoken');

async function generateToken(user) {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: user.Id,
    }

    return jwt.sign(data, jwtSecretKey);
}

const validationToken = async (req, res, next) => {
    console.log("Token handler - Validate Token")
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    const token = req.header(tokenHeaderKey);

    const verified = jwt.verify(token, jwtSecretKey, function (err, decoded) {
        if (err) {
            return {
                success: false,
                message: "Failed to authenticate token.",
            };
        }
        else {
            return {
                success: true,
                message: "Token successfully validated.",
            };
        }
    });

    return verified;
}

module.exports = { generateToken, validationToken };