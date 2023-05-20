const db = require("../config/config")
const {DataTypes} = require("sequelize");

const Users =  db.define('users' , {
    username: {
        type:DataTypes.STRING,
        allowNull : false
    },
    email : {
        type:DataTypes.STRING,
        allowNull:false
    },
    password : {
        type:DataTypes.STRING,
        allowNull:false
    },
    accountType : {
        type:DataTypes.STRING,
        allowNull:false
    }

    
} ,
{
    timestamps : true,
    //prevent sequelize from pluralizing table names
    freezeTableName : true,

});

db.sync()
.then(() => {
    console.log("users table synched successfully");
})
.catch((error)=> {
    console.log("unable to sync users table : " , error);
})

module.exports = Users;

