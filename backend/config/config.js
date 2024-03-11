const Sequelize = require("sequelize");


const db = new Sequelize("Turfs" , "root" , "" , {
    host : "localhost",
    dialect : "mysql"
});


module.exports = db;
