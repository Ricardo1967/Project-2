var request = require("request");
//the movie database API key info - test using movie avengers search ALL (movie and tv)
var options = { method: 'GET',
      url: 'https://api.themoviedb.org/3/search/multi',
      qs: 
      { include_adult: 'false',
        page: '1',
        query: 'avengers',
        language: 'en-US',
        api_key: 'aa0f636f0795b94933b7d8c1b188b57e' },
      body: '{}' };

module.exports = function(app) {

  app.get("/api/results", function(req,res) { 
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
    
        console.log("getting data");
        res.json(response);
      });
  })
};

