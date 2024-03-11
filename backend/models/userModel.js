const db = require("../config/config")
const {DataTypes} = require("sequelize");

const Users =  db.define('users' , {
    user_id:{
        type:DataTypes.INTEGER,
        allowNull : false,
        primaryKey: true,
        autoIncrement: true,
    },
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

