const express = require('express');
const router = express.Router();
const contactctrl = require("../controllers/contact_controllers");

//route creation de tache
 router.post("/mail",contactctrl.mail);

module.exports = router