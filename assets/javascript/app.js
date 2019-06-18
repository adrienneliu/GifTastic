var foodshown = ["spaghetti", "fried chicken", "sushi", "pizza", "carrot", "burrito", "hot dog", "spring roll", "dim sum", "lumpia", "salad", "chili", "samosa", "lasagna", "ramen", "milk tea", "bacon", "udon", "wine", "potato", "french fries", "hamburger", "braised meat", "pho", "meatloaf", "sandwich", "cake", "dumpling", "curry", "lassi", "ice cream", "pudding", "taco", "marshmallow"];
renderButtons();

// make the buttons add to the button area
function renderButtons() {
    
    $("#foodbuttons").empty();
    for (var i = 0; i < foodshown.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("fooddisplay");
        newButton.attr("data-name", foodshown[i]);
        newButton.text(foodshown[i]);
        //alert(newButton);
        $("#foodbuttons").append(newButton);
        
    }
}
//when submit button is clicked, use keyword value to create button
function addButton() {
    event.preventDefault();
    var foodFound = $("#foodSearch").val().trim();

    foodshown.push(foodFound);
  
    renderButtons();

}

// call on giphy for keyword and corresponding rating
// still need to clear page
function displayFood() {
    $(".divfoodImage").empty();
    var foodSearch;
    //Storing the value in the search input
    var foodSearch = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + foodSearch + "&api_key=xldevyUFda5jgS3659tn5rBHaORqZjBi&limit=10";
    //console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);

        var results = response.data;
        for (var j = 0; j < results.length; j++) {

            var foodDiv = $("<p>");
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
            $(".divfoodImage").append(foodDiv);

            var rating = results[j].rating;
            var ratingText = $("<p>").text("Rating: " + rating);
            foodDiv.append(ratingText);
        }
    })
}

//changes the state of images so that on click, will move/stop
function imageAnimate() {
    var state = $(this).attr("data-state");


    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
}

// when food button is clicked, displayfood function happens and pulls photos from giphy
$(document).on("click", ".fooddisplay", displayFood);
$(document).on("click", ".foodimg", imageAnimate);
$(document).on("click", "#addfood", addButton);

