const express = require("express")
const router = express.Router()
const userController = require("../app/controllers/user")
const admincontroller = require("../app/controllers/admin")



router.use("/user",userController)
router.use("/admin",admincontroller)



module.exports=router
