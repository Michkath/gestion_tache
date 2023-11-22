const express = require('express');
const router = express.Router();
const tachectrl = require("../controllers/tache_controllers");
const auth = require("../middleweare/authmiddleweare")
// const auth = require("")
//route creation de tache
router.post("/create",auth,tachectrl.create)

//route creation de tache
router.get("/getall",tachectrl.getall)

//route update tache
router.put("/update/:id",auth,tachectrl.update)

router.delete("/delete/:id",auth,tachectrl.delete_tache)

router.get("/getspecitask/:id",tachectrl.getspecifitache)

router.get("/getinfowithtacheid/:id",auth,tachectrl.getinfowithtacheid)

module.exports = router