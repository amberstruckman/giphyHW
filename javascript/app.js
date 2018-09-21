var topics = ['Lord of the Rings', 'Star Trek', 'Harry Potter', 'Star Wars']

//function buildQueryURL() {
    // queryURL is the url we'll use to query the API
   // var queryURL = "api.giphy.com";
  
    // Begin building an object to contain our API call's query parameters
    // Set the API key
    //var queryParams = { "api-key": "6NIC0TvT6Pw75PHNXCNQiZVj6R7nioW6" };

//     var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=6NIC0TvT6Pw75PHNXCNQiZVj6R7nioW6&limit=10");
// xhr.done(function(data) { console.log("success got data", data); });
// }

function displayButtons(object) {
    

        for (let i = 0; i < topics.length; i++) { //iterate through the array for buttons from array
            var buttonNode = document.createElement("button"); //creating a button in the DOM
            let topicButton = document.createElement("input");  //creating an input 
            topicButton.setAttribute("type", "button"); //setting the input to the type of button
            // topicButton.setAttribute("value", i); //setting the value of each created button to that of an element in the topics array
            //buttonNode.appendChild(topicButton); //appending each created button
            let topicButtonLabel = document.createElement("label");  //creating the label of the button
            topicButtonLabel.textContent = this.topics[i];  //setting the value of the label to be that of each element in the array
            buttonNode.appendChild(topicButtonLabel);  //appending the label to button
            $("#topicButtons").append(buttonNode);  //sending the button to DOM and append
        }
      }

function displayGifs(){
    var topic = $(this).attr("data-name");
//var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=6NIC0TvT6Pw75PHNXCNQiZVj6R7nioW6&limit=10");
var queryURL =    "https://api.giphy.com/v1/gifs/search?q=" +topics[0] + "&api_key=6NIC0TvT6Pw75PHNXCNQiZVj6R7nioW6";


    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    
    
    .then(function(response) {
        let result = response.data[0];
          // Creating a div to hold the gif
          var displayGifDiv = $("<div class='gif'>");

          
          $("#gifViewer").append(displayGifDiv);
          // Creating and storing an image tag
          var topicImage = $("<img>");

          // Setting the topicImage src attribute to imageUrl
          // topicImage.attr("src", imageUrl);
          topicImage.attr("alt", "topic image");
          topicImage.attr("src", result.images.fixed_height_still.url);
          topicImage.attr("gif-still", result.images.fixed_height_still.url);
          topicImage.attr("gif-animate", result.images.fixed_height.url);
          topicImage.attr("gif-state", "still")

          // Prepending the topicImage to the images div
          $(displayGifDiv).prepend(topicImage);
        
   
      // // Storing the rating data
      // var gifRating = response.rating;

      // // Creating an element to have the rating displayed
      // var pOne = $("<p>").text("Rating: " + gifRating);

      // // Displaying the rating
      // displayGifDiv.append(pOne);

      // // Retrieving the URL for the image
      // var imgURL = response.Poster;

      // // Creating an element to hold the image
      // var image = $("<img>").attr("src", imgURL);

      // // Appending the image
      // displayGifDiv.append(image);

      

    });
  };

  function startStopGifs(){
    $(".gif").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });

  }

  

    //buildQueryURL();
    displayButtons();
    displayGifs();
    startStopGifs(); 