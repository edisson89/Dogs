const express = require('express');
const routerDog = express.Router();

const getDogDataHandler = require('../handlers/getDogDataHandler')
const getDogRaza = require('../controllers/dogGetRaza')
const getDogName = require('../controllers/dogGetName')
const dogPost = require('../controllers/dogPost')




routerDog.get("/name", getDogName)
routerDog.get("/:idRaza", getDogRaza)
routerDog.get("/", getDogDataHandler)
routerDog.post("/", dogPost)



module.exports = routerDog