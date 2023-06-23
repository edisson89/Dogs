const express = require('express');
const routerUser = express.Router();

const userGet = require('../controllers/userGet')
const userPost = require('../controllers/userPost')
const userUpdate = require('../controllers/userUpdate')
const userDelete= require('../controllers/deleteUser')

routerUser.get("/get", userGet);
routerUser.post("/create", userPost);
routerUser.put("/update", userUpdate);
routerUser.delete("/delete", userDelete);


module.exports = routerUser