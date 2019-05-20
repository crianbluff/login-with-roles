const express = require('express');
const ProductCtrl = require('../controllers/ProductController');
const Router = express.Router();

Router.get('/', ProductCtrl.index)                                    // Index: Listar todos los productos
      .get('/:key/:value', ProductCtrl.find, ProductCtrl.show)        // Show: Muestra un producto en específio
      .post('/', ProductCtrl.create)                                  // Create: Crear un nuevo producto
      .put('/:key/:value', ProductCtrl.find, ProductCtrl.update)      // name/samsungGalaxy Update: Actualiza un producto en específio
      .delete('/:key/:value', ProductCtrl.find, ProductCtrl.remove);  // name/samsungGalaxy Remove: Elimina un producto en específio

module.exports = Router;