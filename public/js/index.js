$("#searchResults").hide();

$(document).ready(function () { 

  //featured movies section//
  $.ajax({ 
    type: "GET", 
    url: "/api/featured/movies", 
    contentType: "application/json", 
    success: function(data) { 
      console.log(data); 

      for (var i = 0; i < 6; i++) { 

        //var contentID = data.results[i].id;
        var title = data.results[i].original_title;
        var rating = data.results[i].vote_average;
        var image = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;

        var featuredContainer = $("#featuredMovieContainer");

        var cardDeckDiv = $("<div class='card-deck'>");
        var resultDiv = $("<div class='card mx-auto' style='width:175px'>");

        var resultImage = $("<img class='image card-img-top'>");
          resultImage.attr("src", image);

        var resultBody = $("<div class='card-body'>");
        var titleDiv = $("<h3 class='title card-title text-center'</h3>").text(title);

        var ratingDiv = $("<p class='rating card-text text-center'</p>").text(rating);
        var addButton = $("<button id='addButton' type='button' class='btn btn-secondary btn-lg btn-block'>Add to List</button>");

        cardDeckDiv.append(resultDiv);
        resultDiv.append(resultBody, resultImage, titleDiv, ratingDiv, addButton)
        featuredContainer.prepend(resultDiv);
      }
    }
  });
  //END of featured movies section//
 

  //featured TV section//
  $.ajax({ 
    type: "GET", 
    url: "/api/featured/tv", 
    contentType: "application/json", 
    success: function(data) { 
      console.log(data); 

      for (var i = 0; i < 6; i++) { 

        var contentID = data.results[i].id;
        var title = data.results[i].original_title;
        var rating = data.results[i].vote_average;
        var image = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;

        var featuredContainer = $("#featuredTVContainer");

        var cardDeckDiv = $("<div class='card-deck'>");
          
        var resultDiv = $("<div class='card mx-auto' style='width:175px'>");
          
        var resultImage = $("<img class='image card-img-top'>");
          resultImage.attr("src", image);

        var resultBody = $("<div class='card-body contentID'>");
         //resultBody.attr('id', contentID);
        var titleDiv = $("<h3 class='title card-title text-center'</h3>").text(title);

        var ratingDiv = $("<p class='rating card-text text-center'</p>").text(rating);
        var addButton = $("<button id='addButton' type='button' class='btn btn-secondary btn-lg btn-block'>Add to List</button>");

        cardDeckDiv.append(resultDiv);
        resultDiv.append(resultBody, resultImage, titleDiv, ratingDiv, addButton)
        featuredContainer.prepend(resultDiv);
      }
    }
  });
  //END of featured movies section//

  //addButton push to DB
  $(document).on("click", "#addButton", function(){
    console.log("Hello");
   // var $userSelectedID = $(this).parent('.card').find('.contentID').attr();
    var $userSelectedTitle = $(this).parent('.card').find('.title').text();
    var $userSelectedRating = $(this).parent('.card').find('.rating').text();
    var $userSelectedImage = $(this).parent('.card').find('image').text();
    
    
      event.preventDefault();
      var watchList = {
       // id: $userSelectedID,
        title: $userSelectedTitle,
        rating: $userSelectedRating,
        image: $userSelectedImage
      };
      $.post("/api/movie", watchList);
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
            var resultImage = $("<img class=' imagecard-img-top'>");
              resultImage.attr("src", image);

            var resultBody = $("<div class='card-body'>");
            var titleDiv = $("<h3 class='title card-title text-center'</h3>").text(title);
            var ratingDiv = $("<p class='rating card-text text-center'</p>").text(rating);
            var addButton = $("<button id='addButton' type='button' class='btn btn-secondary btn-lg btn-block'>Add to List</button>");

            resultDiv.append(resultImage, titleDiv, resultBody, ratingDiv, addButton)
            divContainer.prepend(resultDiv);
          }
        }
      });
    })
});