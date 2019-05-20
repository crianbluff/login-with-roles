const express = require('express');
const UserCtrl = require('../controllers/UserController');
const Router = express.Router();

Router.get('/', UserCtrl.index)                                 // Index: Listar todos los productos
      .get('/:key/:value', UserCtrl.find, UserCtrl.show)        // Show: Muestra un producto en específio
      .post('/', UserCtrl.create)                               // Create: Crear un nuevo producto
      .put('/:key/:value', UserCtrl.find, UserCtrl.update)      // name/samsungGalaxy Update: Actualiza un producto en específio
      .delete('/:key/:value', UserCtrl.find, UserCtrl.remove);  // name/samsungGalaxy Remove: Elimina un producto en específio

module.exports = Router;