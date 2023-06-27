const express = require('express');
const router = express.Router();

const routerUser = require('./user')
const routerDog = require('./getDogs')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

router.use("/user",routerUser)
router.use("/dogs",routerDog)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;