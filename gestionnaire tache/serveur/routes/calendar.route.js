const express = require('express');
const router = express.Router();
const calendarctrl = require("../controllers/calendar_controllers");

//route creation de tache
router.post("/create",calendarctrl.create)

router.get("/getall",calendarctrl.getall)

module.exports = router