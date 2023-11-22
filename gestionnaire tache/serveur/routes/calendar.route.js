const express = require('express');
const router = express.Router();
const calendarctrl = require("../controllers/calendar_controllers");
const auth = require("../middleweare/authmiddleweare")

//route creation de tache
router.post("/create",auth,calendarctrl.create)

router.get("/getall",auth,calendarctrl.getall)

router.delete("/deletetachecalendar/:id",calendarctrl.delete_tachecalendar)


module.exports = router