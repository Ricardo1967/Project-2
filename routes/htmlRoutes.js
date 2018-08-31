module.exports = function(app) {

  // Load index page
  app.get("/", function(req, res) {
<<<<<<< HEAD
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
      });
    });
=======
    res.render("index", {
>>>>>>> 958404735ddcef1e0eb6903d6a274d5d59665857
  });
});

  // Load login page
  app.get("/login", function(req, res) {
      res.render("login", {
      });
  });
    

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
