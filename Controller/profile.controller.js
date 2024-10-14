const jwt = require('jsonwebtoken');

const profileController = (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
        if (err) {
            res.status(403).send({ message: 'Token not valid' });
        } else {
            res.json({
                authData
            });
        }
    });
};

module.exports = profileController;
