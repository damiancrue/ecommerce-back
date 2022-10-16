const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Order', {
        date : {type: DataTypes.DATEONLY, alowNull: false, defaultValue: DataTypes.NOW},
        buyer : {type: DataTypes.INTEGER, alowNull: false},//  [ref: > users.userId]
        state : {type: DataTypes.INTEGER, alowNull: false}, // [ref: > states.stateId]
        payment : {type: DataTypes.INTEGER, alowNull: true}, // [ref: > payment.paymentId]
        delivery : {type: DataTypes.INTEGER, alowNull: true}, //[ref: > delivery.deliveryId]
})};