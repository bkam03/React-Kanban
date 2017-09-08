module.exports = function( sequelize, DataTypes ) {
  var Card = sequelize.define( "Card", {
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    priority: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    assignedTo: DataTypes.STRING

  }, {
    classMethods: {
      associate: function( models ) {

      }
    }
  } );

  return Card;
}