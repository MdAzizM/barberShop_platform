const ClientController = require('../Controllers/ClientControllers');
const express = require('express');

//MIDDLEWARE
const route = express.Router();

//Routes
route.get('/:id', ClientController.getYourReservation);
route.post('/', ClientController.createReservation);

module.exports = route;
