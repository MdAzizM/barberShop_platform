const AdminController = require('../Controllers/AdminControllers');
const adminAuthController = require('../Controllers/AdminAuthControllers');
const express = require('express');

//MIDDLEWARE
const route = express.Router();

//Routes to sign in for the Admin
route.post('/login', adminAuthController.login);

//Routes for CRUD Operations
route.get('/', AdminController.getAllReservations);
route.get('/:id', AdminController.getOneReservation);
route.post('/', AdminController.createReservation);
route.put('/:id', AdminController.updateReservation);
route.delete('/:id', AdminController.deleteReservation);

module.exports = route;