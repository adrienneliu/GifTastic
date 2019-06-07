var foodshown = ["spaghetti", "fried chicken", "sushi", "pizza", "carrot", "burrito", "hot dog", "spring roll", "dim sum", "lumpia", "salad", "chili", "samosa", "lasagna", "ramen", "milk tea", "bacon", "udon", "wine", "potato", "french fries", "hamburger", "braised meat", "pho", "meatloaf", "sandwich", "cake", "dumpling", "curry", "lassi", "ice cream", "pudding", "taco"];
// var foodshown = [];

// make the buttons add to the button area
function renderButtons() {
    console.log('renderButtons');
    $("#foodbuttons").empty();

    for (var i = 0; i < foodshown.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("foodSearch");
        newButton.attr("data-name", foodshown[i]);
        newButton.text(foodshown[i]);
        //alert(newButton);
        $("#foodbuttons").append(newButton);
        console.log('for renderButtons');
    }

}

//when submit button is clicked, use keyword value to create button
function addButton () {
    var foodSearch = $("#foodSearch").val().trim();

    foodshown.push(foodSearch);
    //alert('here' + foodshown)
    console.log("addButton");
    // var foodSearch = $("#foodSearch").val().trim();

    // foodshown.push(foodSearch);
    renderButtons();
  
}

// call on giphy for keyword and corresponding rating
// still need to clear page
function displayFood() {
    console.log('displayFood');
    $(".divfoodImage").empty();
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
        for (var j = 0; j < results.length; j++) {

            var foodDiv = $("<div>");
            var foodP = $("<p>");
            var foodStill = results[j].images.fixed_height_still.url;
            var foodMove = results[j].images.fixed_height.url;
            var foodImage = $("<img>");


            foodImage.attr("src", foodStill);
            foodImage.attr("alt", "delicious");
            //original/default use this: 
            foodImage.attr("data-still", foodStill);
            //click use this
            foodImage.attr("data-animate", foodMove)
            //set the data state to still until clicked
            foodImage.attr("data-state", "still");
            foodImage.addClass("foodimg")

            foodDiv.append(foodP);
            foodDiv.append(foodImage);
            $(".divfoodImage").prepend(foodDiv);

            var rating = results[j].rating;
            var ratingText = $("<p>").text("Rating: " + rating);
            foodDiv.prepend(ratingText);
        }
    })
}

//changes the state of images so that on click, will move/stop
function imageAnimate() {
    console.log('Animate');
    var state = $(this).attr("data-state");


    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else  {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
}



// when food button is clicked, displayfood function happens and pulls photos from giphy
$(document).on("click", ".foodSearch", displayFood);
$(document).on("click", ".foodimg", imageAnimate);
$(document).on("click", "#addfood", addButton);
var pp=0;
console.log(pp++);
renderButtons();
console.log(pp++);


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