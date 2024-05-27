const db = require("../config/config")

const {DataTypes} = require("sequelize");
const users = require("./userModel");

const Turfs = db.define('turfs', {
    turf_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey : true,
        autoIncrement : true, 
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : 'users',
            key : 'user_id',
        } ,
    },
    title:{
        type:DataTypes.STRING,
        allowNull : false,
    },
    format:{
        type:DataTypes.STRING,
        allowNull : false,
    },
    surface:{
        type:DataTypes.STRING,
        allowNull : false,
    },
    postcode:{
        type:DataTypes.STRING,
        allowNull : false,
    },
    numberOfPitches:{
        type:DataTypes.DOUBLE,
        allowNull : false,
    },
    venue:{
        type:DataTypes.STRING,
        allowNull : false,
    },
    facilities:{
        type:DataTypes.STRING,
        allowNull : false,
    },
    startTime :{
        type:DataTypes.STRING,
        allowNull : false,
    },
    closeTime : {
        type:DataTypes.STRING,
        allowNull : false,
    },
    matchDuration : {
        type:DataTypes.STRING,
        allowNull : false,
    },
    Image:{
        type:DataTypes.STRING,
        allowNull : false,
    }
    

} ,
{
    timestamps : true,
    //prevent sequelize from pluralizing table names
    freezeTableName : true,

});


Turfs.hasMany(users, {foreignKey : 'user_id'});

db.sync()
.then(() => {
    console.log("Turfs table  synched successfully");
})
.catch((error) => {
    console.log("unable to synched Turfs table :" , error);
})

module.exports = Turfs;
