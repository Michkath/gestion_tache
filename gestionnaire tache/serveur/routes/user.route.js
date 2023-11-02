const express = require('express');
const router = express.Router();
const userctrl = require("../controllers/user_controllers");

//Route inscription
router.post('/signin',userctrl.signin)
//route authentification,
router.post('/login',userctrl.login)
//route afficher les utilisater
router.get('/getall',userctrl.getall)

router.delete('/delete/:id',userctrl.delete)

router.get("/getemailwithuserid/:id",userctrl.getemailwithuserid)

router.get("/logout",userctrl.logout)

module.exports = router