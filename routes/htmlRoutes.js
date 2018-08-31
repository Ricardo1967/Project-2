module.exports = function(app) {

  // Load index page
  app.get("/", function(req, res) {
      res.send("index", {
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
