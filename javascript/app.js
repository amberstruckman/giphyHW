var topics = ['Lord of the Rings', 'Star Trek', 'Harry Potter', 'Star Wars']



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

     displayButtons();