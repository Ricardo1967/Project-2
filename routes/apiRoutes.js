var request = require("request");
var db = require("../models");

  sequelize = db.sequelize;
  Sequelize = db.Sequelize;

//the movie database API key info - test using movie avengers search ALL (movie and tv)

module.exports = function (app) {

  //get results to user Search
  app.get("/api/movie/:title", function (req, res) {
    console.log('in movie');
    var movieTitle = req.params.title;
    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/multi',
      qs:
        {
          include_adult: 'false',
          page: '1',
          query: movieTitle,
          language: 'en-US',
          api_key: 'aa0f636f0795b94933b7d8c1b188b57e'
        },
      body: '{}'
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log("getting data");
      response = JSON.parse(response.body);
      var result = response.results;
      console.log(response);
      res.json(response);
    });
  });
  //END of user Search 

  //obtaining data for 'featured movies'
  app.get("/api/featured/movies", function (req, res) {
    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/movie/day',
      qs:
        { api_key: 'aa0f636f0795b94933b7d8c1b188b57e' },
      body: '{}'
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log("getting data");
      response = JSON.parse(response.body);
      var result = response.results;
      console.log(response);
      res.json(response);
    });
  });
  //END of featured movies section


  //obtaining data for 'featured TV'
  app.get("/api/featured/tv", function (req, res) {
    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/tv/day',
      qs:
        { api_key: 'aa0f636f0795b94933b7d8c1b188b57e' },
      body: '{}'
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log("getting data");
      response = JSON.parse(response.body);
      var result = response.results;
      console.log(response);
      res.json(response);
    });
  });
  //END of featured TV section

  // adding content data into WatchList_db when user clicks on #addButton
  app.post("/api/add", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.WatchList.create({
      contentID: req.body.contentID,
      title: req.body.title,
      rating: req.body.rating,
      image: req.body.image
    }).then(function(dbWatchList) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbWatchList);
    });
  });
  // END OF adding content data into WatchList_db


  // adding searchqueries into SearchList_db 
  // app.post("/api/add/searchquery", function(req, res) {
  //   console.log(req.body);
  //   // create takes an argument of an object describing the item we want to
  //   // insert into our table. In this case we just we pass in an object with a text
  //   // and complete property (req.body)
  //   db.SearchList.create({
  //     searchQuery: req.body.searchQuery
  //   }).then(function(dbSearchList) {
  //     // We have access to the new todo as an argument inside of the callback function
  //     res.json(dbSearchlist);
  //   });
  // });
  // END OF adding searchqueries into SearchList_db 


};