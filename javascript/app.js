var topics = ['Lord of the Rings', 'Star Trek', 'Harry Potter', 'Star Wars']

function displayButtons() {
    
  for (let i = 0; i < topics.length; i++) { //iterate through the array for buttons from array
      var buttonNode = document.createElement("button"); //creating a button in the DOM
      $(buttonNode).attr("value", topics[i]);
      buttonNode.textContent = topics[i]; 
      $("#topicButtons").append(buttonNode);  //sending the button to DOM and append
  }
  $("button").on("click", displayGifs);
}

function displayGifs(){
  var topic = $(this).attr("value");
    
        // In this case, the "this" keyword refers to the button that was clicked
  //var person = $(this).attr("topicButton");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic.replace(" ", "+") + "&api_key=6NIC0TvT6Pw75PHNXCNQiZVj6R7nioW6&limit=10";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(displayGiphy);  
}

function displayGiphy(response) {
  for (let i = 0; i < response.data.length; i++) {
    let result = response.data[i];

    
      
      
    // Creating a div to hold the gif
    var displayGifDiv = $("<div>");

    
    // Creating and storing an image tag
    var topicImage = $("<img>");

    // Setting the topicImage src attribute to imageUrl
    // topicImage.attr("src", imageUrl);
    topicImage.attr("alt", "topic image");
    topicImage.attr("src", result.images.fixed_height_still.url);
    topicImage.attr("gif-still", result.images.fixed_height_still.url);
    topicImage.attr("gif-animate", result.images.fixed_height.url);
    topicImage.attr("gif-state", "still");
    topicImage.attr("class", "gif");

    // Prepending the topicImage to the images div
    displayGifDiv.append(topicImage);


    // Storing the rating data
    var gifRating = result.rating;

    // Creating an element to have the rating displayed
    var pOne = $("<p>").text("Rating: " + gifRating);

    // Displaying the rating
    displayGifDiv.append(pOne);
    gifViewer.append(displayGifDiv);
    }
    

     

}
  function startStopGifs(){//make this and event-handling function
    // $(".gif").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element

      var state = $(this).attr("gif-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("gif-animate"));
        $(this).attr("gif-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("gif-still"));
        $(this).attr("gif-state", "still");
      }
    // });

  }
  $(document).on("click", ".gif", startStopGifs);
  var gifViewer = $("#gifViewer");
  

    displayButtons();
