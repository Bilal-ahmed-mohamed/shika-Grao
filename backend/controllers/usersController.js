const Users = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const validator = require("validator")

const createToken = (id) => {
    return jwt.sign({id} , process.env.SECRET , {expiresIn:'3d'})
}



// login user 
const loginUser = async (req,res) => {
    const {email,password} = req.body

    if (!email || !password) {
        return res.status(405).json({
            succes : false,
            message : "please fill all the fields"
        })
    }
    if (!validator.isEmail(email)) {
        return res.status(406).json({
            succes:false,
            message : "wrong email format" 
        })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(407).json({
            succes : false,
            message: "password is not long enough"
        })
    }
    try {
        const user = await Users.findOne({where : {email : email}})
        if (!user) {
            return res.status(408).json({
                success : false,
                message : "the email given is not recogonised"
            })
        }
        const dbPassword = user.password;
        bcrypt.compare(password,dbPassword).then((match) => {
            if (!match) {
                return res.status(409).json({
                    success : false,
                    message : "the pasword given dosent match the passowrd"
                })
            }else{
                const token = createToken(user.id)
                res.status(200).json({
                    succes : true,
                    email , token
                })
            }
        })
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }

    
}


// signup user 
const signupUser = async (req,res) => {
  
    const {username , email , password} = req.body;
    // validation
    if ( !username ||  !email || !password) {
        return res.status(401).json({
            success:false,
            message:"all fields are required",
        })
    }
    // email validation 
    if (!validator.isEmail(email)) {
        return res.status(402).json({
            success:false,
            message:"the email is not valid",
        })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(403).json({
            success:false,
            message:"the password is not strong enough",
        })
    }

    try {
        const Exists = await Users.findOne({where : {email : email}}) 
        if (Exists) {
            return res.status(404).json({
                success : false,
                message : "the email already exists",
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)
        const user = await Users.create({username,email,password:hash})
        // create token
        const token = createToken(user.id)
        res.status(200).json({
            success:true,
            email,token
        })
    } catch (error) {
        res.json({message : error.message})
    }
}


module.exports = {signupUser, loginUser}