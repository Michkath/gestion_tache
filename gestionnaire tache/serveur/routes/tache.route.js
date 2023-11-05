const express = require('express');
const router = express.Router();
const tachectrl = require("../controllers/tache_controllers");
const authori = require("../middleweare/authmiddleweare")

//route creation de tache
router.post("/create",tachectrl.create)

//route creation de tache
router.get("/getall", tachectrl.getall)

//route update tache
router.put("/update/:id",tachectrl.update)

router.delete("/delete/:id",tachectrl.delete_tache)

router.get("/getspecitask/:id",tachectrl.getspecifitache)

router.get("/getinfowithtacheid/:id",tachectrl.getinfowithtacheid)

module.exports = router