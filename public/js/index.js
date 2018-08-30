function postResult() { 
  $.ajax({
    type:"POST", 
    url:"/api/results",
    data: JSON.stringify(data), 
    success: function(data) { 
      alert("Success")
    }
  });
}//postItem() 

$("#searchResult").on('click', function() { 
  postResult();
});


