const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config');

function login(req, res) {
  let username = req.body.username;
  let password = req.body.password;

  User.findOne({username})
  .then(
    user => {
      if (!user) return res.status(404).send({message: 'El usuario no existe'});
      bcrypt.compare(password, user.password)
      .then( match => {
        if (match)  {
          // Dar acceso
          payload = {
            username: user.username,
            name: user.name,
            email: user.email,
            role: user.role
          };
          jwt.sign(payload, CONFIG.SECRET_TOKEN, function(error, token) {
            if (error) {
              res.status(500).send({error});
            } else {
                res.status(200).send({message: 'Acceso', token});
              }
          });
        } else {
            // No doy acceso
            return res.status(200).send({message: 'Password incorrecta'});
          }
      })
      .catch( error => {
        console.log(error);
        res.status(500).send({error});
      });
    }
  )
  .catch( error => {
    console.log(error);
    res.status(500).send({error});
  });
}

module.exports = login;