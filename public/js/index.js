$(document).ready(function () {

  //featured movies //
  $.ajax({ 
    type: "GET", 
    url: "/api/featured", 
    contentType: "application/json", 
    success: function(data) { 
      console.log(data); 

      for (var i = 0; i < 6; i++) { 

        var title = data.results[i].original_title;
        var rating = data.results[i].vote_average;
        var image = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;

        var featuredContainer = $("#featuredContainer");

        var cardDeckDiv = $("<div class='card-deck'>");
        var resultDiv = $("<div class='card mx-auto' style='width:175px'>");

        var resultImage = $("<img class='card-img-top'>");
          resultImage.attr("src", image);

        var resultBody = $("<div class='card-body'>");
        var titleDiv = $("<h3 class='card-title text-center'</h3>").text(title);

        var ratingDiv = $("<p class='card-text text-center'</p>").text(rating);
        var addButton = $("<button id='addButton' type='button' class='btn btn-secondary btn-lg btn-block'>Add to List</button>");

        cardDeckDiv.append(resultDiv);
        resultDiv.append(resultBody, resultImage, titleDiv, ratingDiv, addButton)
        featuredContainer.prepend(resultDiv);
      }
    }
  });

 

  //addButton push to DB
  $("#addButton").on('click', function(){
    console.log("Hello");
    var $userSelectedTitle = $(this).find('.card').find('card-title').val();
    var $userSelectedRating = $(this).find('.card').find('card-text').val();
    var $userSelectedImage = $(this).find('.card').find('card-img-top').val();
    
    
      event.preventDefault();
      var todo = {
        title: $userSelectedTitle.val().trim(),
        rating: $userSelectedRating.val().trim(),
        image: $userSelectedImage.val().trim(),
      };
  
      $.post("/api/movie", todo, getTodos);
      $newItemInput.val("");
    
  });

  //search results from search bar on click
  $("#searchForMovie").on('click', function () {
    $("#resultsContainer").empty();
    $("#featuredContainer").empty();
      event.preventDefault();

      var searchInput = $("#searchContent").val();

      $.ajax({
        type: "GET",
        url: "/api/movie/"+searchInput,
        contentType: "application/json",
        success: function (data) {
          console.log(data);
          //for loop to show up to 4 results //
          for (var i = 0; i < 4; i++) { 
            var title = data.results[i].original_title;
            var rating = data.results[i].vote_average;
            var image = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;

            var divContainer = $("#resultsContainer");


            var resultDiv = $("<div class='card mx-auto' style='width:175px'>");

            var resultBody = $("<div class='card-body'>");
            var resultImage = $("<img class='card-img-top'>");
              resultImage.attr("src", image);

            var resultBody = $("<div class='card-body'>");
            var titleDiv = $("<h3 class='card-title text-center'</h3>").text(title);
            var ratingDiv = $("<p class='card-text text-center'</p>").text(rating);
            var addButton = $("<button id='addButton' type='button' class='btn btn-secondary btn-lg btn-block'>Add to List</button>");

            resultDiv.append(resultImage, titleDiv, resultBody, ratingDiv, addButton)
            divContainer.prepend(resultDiv);
          }
        }
      });
    })
});