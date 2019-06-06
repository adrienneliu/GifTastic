$(document).submit(function () {
    event.preventDefault();


    var food = ["spaghetti", "fried chicken", "sushi"];

    function displayFood() {
  
    var foodSearch; 
//Storing the value in the search input
    var foodSearch = $("#foodSearch").val();

    console.log(foodSearch);

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + foodSearch + "&api_key=xldevyUFda5jgS3659tn5rBHaORqZjBi&limit=5";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var results = response.data; 
        for (var i = 0; i<foodSearch.length; i++) {
        
        var foodDiv = $("<div>")
        var foodP = $("<p>")
        var foodURL = results[i].images.fixed_height.url;
        var foodImage = $("<img>"); 

        foodImage.attr("src", foodURL);
        foodImage.attr("alt", "food")
        
        foodDiv.append(foodP);
        foodDiv.append(foodImage);
        $(".foodImage").prepend(foodDiv);
    }
    }) 
    }

    function renderButtons() {
        $("#foodbuttons").empty();

        for (var i = 0; i<foodSearch.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("food-button");
        newButton.attr("data-name", foodSearch[i]);
        newButton.text(foodSearch[i]);
        $("#foodbuttons").append(newButton);
        }

    }



    renderButtons();
    displayFood();
});

//dynamically create buttons 

// have a search bar with a value in it, so that the value can be retrieved

//link to jquery

//get the query url 

// url for value and plug in key 

//call on ajax

// create div so that it will not stick together 

// grab the rating

// give class attribute image source 

//call on giphy to pull images

//stle page