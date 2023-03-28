const Sequelize = require("sequelize");


const db = new Sequelize("shikaGrao" , "root" , "" , {
    host : "localhost",
    dialect : "mysql"
});


module.exports = db;