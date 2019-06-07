var foodshown = ["spaghetti", "fried chicken", "sushi", "pizza", "carrot", "burrito", "hot dog", "spring roll", "dim sum", "lumpia", "salad", "chili", "samosa", "lasagna", "ramen", "milk tea", "bacon", "udon", "wine", "potato", "french fries", "hamburger", "braised meat", "pho", "meatloaf", "sandwich"];


function renderButtons() {
    $("#foodbuttons").empty();

    for (var i = 0; i < foodshown.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("foodSearch");
        newButton.attr("data-name", foodshown[i]);
        newButton.text(foodshown[i]);
        $("#foodbuttons").append(newButton);
        console.log('renderButtons');
    }

}

$("#add-food").on("click", function (event) {
    var foodSearch = $("#foodSearch").val().trim();
    foodshown.push(foodSearch);
    renderButtons();
    console.log(foodval);
})

    function displayFood() {

        var foodSearch;
        //Storing the value in the search input
        var foodSearch = $(this).attr("data-name");

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + foodSearch + "&api_key=xldevyUFda5jgS3659tn5rBHaORqZjBi&limit=10";
        //console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var results = response.data;
            for (var i = 0; i < results.length; i++) {

                              

                var foodDiv = $("<div>");
                var foodP = $("<p>");
                var foodURL = results[i].images.fixed_height.url;
                var foodImage = $("<img>");

                foodImage.attr("src", foodURL);
                foodImage.attr("alt", "food");

                foodDiv.append(foodP);
                foodDiv.append(foodImage);
                $(".foodImage").prepend(foodDiv);

                var rating = results[i].rating;
                var ratingText = $("<p>").text("Rating: " + rating);
                foodDiv.prepend(ratingText);
            }
        })
    }


$(document).on("click", ".foodSearch", displayFood);
renderButtons();


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






        // $(document).on("click", "food-button", displayFood);
        //renderButtons();
        //displayFood();