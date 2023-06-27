const express = require('express');
const routerDog = express.Router();

const getDogData = require('../controllers/obtenerDogs')
const getDog = require('../controllers/dogGet')


routerDog.get("/dogs", getDogData)
routerDog.get("/:idRaza", getDog)

module.exports = routerDog