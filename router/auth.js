const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Auth = require('../helpers/authDB.js');

const router = express.Router();

const secrets = require('../api/secret.js');

function generateToken(user){
    const payload = {
        subject: user.id, 
        username: user.username,
    }
    const option = {
        expiresIn: '1d',
    }
    return jwt.sign(payload, secret, option);
}

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash;
    
    Auth.add(user)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});


router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Auth.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user)
                res.status(200).json({ message: `Welcome ${user.username}`, token})
            }else {
                res.status(401).json({ message: 'Try Again'})
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router;