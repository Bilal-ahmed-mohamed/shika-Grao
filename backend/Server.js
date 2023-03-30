require('dotenv').config();
const express = require("express");
const database = require("./config/config");
const turfRoutes = require("./routes/turfs");
const usersRoutes =  require("./routes/users");

const app = express();

const PORT = process.env.PORT || 4000;



app.use(express.json());

// routes 
app.use('/api/Turfs' , turfRoutes)
app.use('/api/users' , usersRoutes)

try {
    database.authenticate();
    console.log("you are connected to the databse");
} catch (error) {
    console.log("connection Error :", error);
}

// middleware
app.use((req,res,next) => {
    console.log(req.path, req.method);

    next();
})

app.listen(4000, () => {
    console.log('its litsenining on port 4000');
})