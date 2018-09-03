$(document).ready(function () {

  console.log("working")
  function postResult() {
    $.ajax({
      type: "GET",
      url: "/api/results",
      contentType: "application/json",
      success: function (data) {

        //data = data.body;
        //var contentTitle = data.body.title;
        //title = JSON.stringify(data.body.title);
        alert("Success");
        console.log("results out");
        console.log(data);
        $("#searchResult").text(data.title);
        //$("#movieTitle").text(contentTitle);
      }
    });
  };

  $("#searchForMovie").on('click', function () {

    $("#resultsContainer").empty();

    event.preventDefault();
    console.log('inside click');
    var searchInput = $("#searchContent").val();
    console.log(searchInput);
    $.ajax({
      type: "GET",
      url: "/api/movie/"+searchInput,
      contentType: "application/json",
      success: function (data) {

        alert("success");
        console.log("results out");
        console.log(data);

        console.log(data.results[0].original_title);


        for (var i = 0; i < 4; i++) { 

          var title = data.results[i].original_title;
          var rating = data.results[i].vote_average;
          var image = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;

          var divContainer = $("#resultsContainer");
          
          var resultDiv = $("<div class='card mx-auto' style='width:30rem'>");

          var resultBody = $("<div class='card-body'>");
          var resultImage = $("<img class='card-img-top'>");
          resultImage.attr("src", image);

          var resultBody = $("<div class='card-body'>");

          var titleDiv = $("<h3 class='card-title text-center'</h3>").text(title);
          var ratingDiv = $("<p class='card-text text-center'</p>").text(rating);

          var addButton = $("<button id='addButton' type='button' class='btn btn-secondary btn-lg btn-block'>Add to List</button>");

          resultDiv.append(resultImage, resultBody, titleDiv, ratingDiv, addButton)
          divContainer.prepend(resultDiv);
        }
      }
    });
  })

});