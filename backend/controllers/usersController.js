const Users = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const validator = require("validator")

const createToken = (id) => {
    return jwt.sign({id} , process.env.SECRET , {expiresIn : '3d'})
}

// signup user 
const signupUser = async (req,res) => {
 
    const {username , email , password} = req.body;
    // validation
    if ( !username ||  !email || !password) {
        return res.sendStatus(401)
    }
    // email validation 
    if (!validator.isEmail(email)) {
        return res.sendStatus(402)
    }
    if (validator.isStrongPassword(password)) {
        return res.sendStatus(403)
    }

    try {
        const Exists = await Users.findOne({email})
        if (Exists) {
            return res.sendStatus(404)
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)
        const user = await Users.create({username,email,password:hash})


        // create token
        const token = createToken(user.id)
        res.sendStatus(200).json({email,token})
    } catch (error) {
        res.json({message : error.message})
    }
}

// login user 
const loginUser = async (req,res) => {
    const {email,password} = req.body

    if (!email || !password) {
        return res.sendStatus(405)
    }
    if (!validator.isEmail(email)) {
        return res.sendStatus(406)
    }
    if (!validator.isStrongPassword(password)) {
        return res.sendStatus(407)
    }

    try {
        const User = await Users.login(email,password)
        const token = createToken(User.id)
        res.sendStatus(200).json({email,token})
    } catch (error) {
        res.sendStatus(400).json({error : error.message})
    }
}
module.exports = {signupUser, loginUser}