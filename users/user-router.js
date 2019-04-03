const express = require('express');

const User = require('./user-model.js');

const router = express.Router();

router.get('/', withRole('admin'), (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

function withRole(role) {
  return function(req, res, next) {
    if (
      req.decodedJwt &&
      req.decodedJwt.roles &&
      req.decodedJwt.roles.includes(role)
    ) {
      next();
    } else {
      res.status(403).json({ message: 'You are not authorized' });
    }
  };
}

module.exports = router;