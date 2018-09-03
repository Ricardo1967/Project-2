var request = require("request");

var mdb = require('moviedb')('aa0f636f0795b94933b7d8c1b188b57e');

//the movie database API key info - test using movie avengers search ALL (movie and tv)

module.exports = function (app) {
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
        // var responseObj = {
        //   //title: result.title,
        //   rating: result.vote_average,
        //   image: "https://image.tmdb.org/t/p/w500" + result.poster_path
        // }
      
      //console.log(responseObj);
      console.log(response);
      res.json(response);

    });
  });


//   app.get("/api/movie/:title", function (req, res) {

//     var movieTitle = req.params.title;

//     console.log(movieTitle);
//     mdb.searchMulti(
//       { 
//         query: movieTitle 
//       }, (err, res) => {

//         console.log(res);
//     });
//         res.send(res);
//         //res.json(result);
//    })


};
