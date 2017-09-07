module.exports = function( sequelize, DataTypes ) {
  var Card = sequelize.define( "Card", {


  }, {
    classMethods: {
      associate: function( models ) {

      }
    }
  } );

  return Card;
}