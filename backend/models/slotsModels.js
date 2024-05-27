const db = require("../config/config");

const {DataTypes} = require("sequelize");
const Turfs = require("./turfsModels");


const Slots =  db.define('slots', {
    slot_id :{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey : true,
        autoIncrement : true,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false, 
        defaultValue : "Available"
    },
    turf_id : {
     type :DataTypes.INTEGER,
     allowNull : false,
     refrences : {
        model : 'turfs',
        key : 'turf_id',
     }
    }
},
    {
        timestamps : true,
        //prevent sequelize from pluralizing table names
        freezeTableName : true,
    
    });


Slots.belongsTo(Turfs, {foreignKey: 'turf_id'});    

    // Slots.belongsTo(Turfs, { foreignKey: 'turf_id' });
    // Slots.belongsTo(Turfs, {as: 'Turfs', foreignKey: 'turf_id'});

db.sync()
.then(() => {
    console.log("slots table  synched successfully");
})
.catch((error) => {
    console.log("unable to synched slots table :" , error);
})
module.exports = Slots;

