const express = require('express');
const routerDog = express.Router();

const getDogData = require('../controllers/obtenerDogs')
const getDog = require('../controllers/dogGet')


routerDog.get("/", getDogData)
routerDog.get("/:id", getDog)

module.exports = routerDog