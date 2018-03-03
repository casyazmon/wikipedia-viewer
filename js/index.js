$(function() {





  // enter
    $("#searchBar,#search").keypress(function(e){
    	if(e.keyCode===13){
    		var searchTerm = $("input:text").val();
		    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
		    $.ajax({
			url: url,
			type: 'GET',
			contentType: "application/json; charset=utf-8",
			async: false,
        	dataType: "json",
        	success: function(data, status, jqXHR) {
        		console.log(data);
        		$("#results").html("");
        		for(var i = data[1].length - 1 ;i >= 0;  i--){
        			$("#results").prepend("<div><div class='well link'><a href="+data[3][i]+" target = '_blank' class = 'link'><h2 >" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");


        		}

        	}
		})
    	}
    });
// Samething but for when you click on the hour glass
    $("#searchBar,#search").on("click", function() {
    	var searchTerm = $("input:text").val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
		$.ajax({
			url: url,
			type: 'GET',
			contentType: "application/json; charset=utf-8",
			async: false,
        	dataType: "json",
          // plop data
        	success: function(data, status, jqXHR) {
        		//console.log(data);
        		$("#results").html("");
        		for(var i = data[1].length - 1 ;i >= 0;  i--){
        			$("#results").prepend("<div><div class='well '  ><a href="+data[3][i]+" target = '_blank' class = 'link'><h2>" + data[1][i]+ "</h2>" + "<p >" + data[2][i] + "</p></a></div></div>");
        		}

        	}
		})


    });


});