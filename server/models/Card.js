module.exports = function( sequelize, DataTypes ) {
  var card = sequelize.define( "card", {
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    priority: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    assignedTo: DataTypes.STRING

  }, {
    classMethods: {
      associate: function( models ) {
      card.hasMany( models.Task )
      }
    }
  } );

  return card;
}