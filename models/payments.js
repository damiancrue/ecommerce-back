const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Payment', {
        type : {type: DataTypes.STRING},
})};