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
    turf_id : {
     type :DataTypes.INTEGER,
     allowNull : false,
     references : {
        model : 'turfs',
        key : 'turf_id',
     }
    },
    day_of_the_week :{
        type : DataTypes.INTEGER,
        allowNull : false
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    }

},
    {
        timestamps : true,
        //prevent sequelize from pluralizing table names
        freezeTableName : true,
    
    });


Slots.belongsTo(Turfs, {foreignKey: 'turf_id'});    


db.sync()
.then(() => {
    console.log("slots table  synched successfully");
})
.catch((error) => {
    console.log("unable to synched slots table :" , error);
})
module.exports = Slots;

