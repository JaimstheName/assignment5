// Use .submit() or $.click to figure out when the user clicks the "submit" button

// Show what handle to use to show the action that must be used to cause the listener to influence the function. 

$("#submit-btn").click(changeBackground)

// Call $.val() on inputs to get the string value of your user's input
// Store user input in var city

// Show what function will be influenced by what variable and how that variable will be defined. 
function changeBackground(){
 var city = $("#city-type").val(); 
 
 // Prevent a page refresh using the evt.preventDefault() function
 event.preventDefault()

// Create if / else if / else conditionals to control the flow of your application

// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded

// Get the first element from an attribute name using $.attr()

// Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code

// If a user submits:

// "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
// "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
// "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
// "Austin" or "ATX" make the background of the page austin.jpg
// "Sydney" or "SYD" make the background of the page sydney.jpg

//Demonstrate what image will show up once the variable is determined by defining what attribute will pull the image from the folder. 

if (city == "new york" || city == "nyc"){
	$("body").attr("class",'nyc');
}
else if(city == "San Francisco" || city == SF || city == "Bay Area"){
	$("body").attr("class","sf");
}
else if(city == "Los Angeles" || city == LA || city == LAX){
	$("body").attr("class", "la");
}
else if(city == "Austin" || city == "ATX"){
	$("body")attr.("class", "austin")
}
else if(city == "Sydney" || city == "SYD"){
	$($"body")attr.("class","sydney")
}

// Write at least six different lines of pseudocode and display them inline as JavaScript comments



