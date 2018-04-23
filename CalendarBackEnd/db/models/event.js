const Sequelize = require('sequelize');
const db = require('../');

const Event = db.define('event', {
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    start:{
        type:Sequelize.STRING,
        allowNull:false
    },
    end:{
        type:Sequelize.STRING,
        allowNull:false
    },
    date:{
        type:Sequelize.DATEONLY,
        allowNull:false
    }
})

module.exports = Event;

