function postResult() { 
  $.ajax({
    type:"POST", 
    url:"/api/results",
    data: JSON.stringify(data), 
    success: function(data) { 
      alert("Success");
      renderFunction(); 
    }
  });
}//postItem() 

function renderFunction() { 
  console.log("results out");
  $("#searchResult").text(data);
};