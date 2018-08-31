$(document).ready(function() { 
  console.log("working")
  function postResult() {
    $.ajax({
      type: "GET",
      url: "/api/results",
      contentType: "application/json",
      success: function (data) {
        data = JSON.stringify(data)
        alert("Success");

        console.log("results out");
        $("#searchResult").text(data);

        //renderFunction(data);
      }
    });
  }//postItem() 
postResult()
  // function renderFunction(data) {
  //   console.log("results out");
  //   $("#searchResult").text(data);
  // };

});
