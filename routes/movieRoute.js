
var request = require("request");

var options = { method: 'GET',
  url: 'https://api.themoviedb.org/3/search/multi',
  qs: 
   { include_adult: 'false',
     page: '1',
     query: 'avengers',
     language: 'en-US',
     api_key: 'aa0f636f0795b94933b7d8c1b188b57e' },
  body: '{}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


  // var options = { 
  //   method: 'GET',
  //   url: 'https://api.themoviedb.org/3/search/multi',
  //   qs: 
  //   { include_adult: 'false',
  //     page: '1',
  //     query: 'avengers',
  //     language: 'en-US',
  //     api_key: 'aa0f636f0795b94933b7d8c1b188b57e' },
  //   body: '{}' };

  // app.post("/", function(request, response) {
  //   request(options, function (error, response, body) {
  //     if (error) throw new Error(error);

  //       console.log(body);
  //       res.json(body);
  //   });
  // });
