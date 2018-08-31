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
    event.preventDefault();
    console.log('inside click');
    var searchInput = $("#searchContent").val();
    console.log(searchInput);
    $.ajax({
      type: "GET",
      url: "/api/movie/"+searchInput,
      contentType: "application/json",
      success: function (data) {
      }
    });

  })


  // postResult();

});