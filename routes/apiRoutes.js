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

// INITIAL given db Template
   // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
