module.exports = function(sequelize, DataTypes) {
  var WatchList = sequelize.define("WatchList", {
    title: DataTypes.STRING,
    genre: DataTypes.TEXT,
    rating: DataTypes.STRING,
    image: DataTypes.STRING,
    overview: DataTypes.TEXT,

  });
  return WatchList;
};
