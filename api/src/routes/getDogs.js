const express = require('express');
const routerDog = express.Router();

const getDogData = require('../controllers/obtenerDogs')
const getDogRaza = require('../controllers/dogGetRaza')
const getDogName = require('../controllers/dogGetName')
const dogPost = require('../controllers/dogPost')




routerDog.get("/name", getDogName)
routerDog.get("/:idRaza", getDogRaza)
routerDog.get("/", getDogData)
routerDog.post("/", dogPost)



module.exports = routerDog