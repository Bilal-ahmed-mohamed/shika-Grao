const express = require("express")
const Users = require("../models/userModel")
const {loginUser , signupUser} = require("../controllers/usersController")


const router = express.Router()

// signup route 
router.post('/Signup', signupUser)


// login route 
router.post('/Login', loginUser)

module.exports = router;