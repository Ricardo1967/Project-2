module.exports = function(sequelize, DataTypes) {
  var WatchList = sequelize.define("WatchList", {
    contentID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    rating: DataTypes.STRING,
    image: DataTypes.STRING,
    
  });
  return WatchList;

  // var SearchList = sequelize.define("SearchList", { 
  //   searchQuery: DataTypes.STRING,
  // });
  // return SearchList;

};