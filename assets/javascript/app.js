$(document).submit(function () {
    event.preventDefault();

    var foodSearch; 

    var foodSearch = $("#foodSearch").val();
    console.log(foodSearch);


    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + foodSearch + "&api_key=xldevyUFda5jgS3659tn5rBHaORqZjBi&limit=5"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

    }) 

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