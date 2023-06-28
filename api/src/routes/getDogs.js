const express = require('express');
const routerDog = express.Router();

const getDogData = require('../controllers/obtenerDogs')
const getDogRaza = require('../controllers/dogGetRaza')
const getDogName = require('../controllers/dogGetName')
const dogPost = require('../controllers/dogPost')




routerDog.get("/dogs", getDogData)
routerDog.get("/:idRaza", getDogRaza)
routerDog.get("/name", getDogName)
routerDog.post("/dogs", dogPost)



module.exports = routerDog