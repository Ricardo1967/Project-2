module.exports = function(sequelize, DataTypes) {
  var WatchList = sequelize.define("WatchList", {
    title: DataTypes.STRING,
    rating: DataTypes.STRING,
    image: DataTypes.STRING,
    
  });
  return WatchList;
};
