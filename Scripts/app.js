// File: app.js 
// Author: Tamara Howell
// Site: http://comp1073-a1.azurewebsites.net/
// Description: Contains JavaScript for About Me page


//reference an element
var aboutMe = document.getElementById("aboutMe");

//create variable that contains content
var aboutContent = "Hello! My name is Tamara. I'm a second semester web design student at Georgian College. "
				+ "I enjoy long walks, gardening and knitting. I'm like your Nana, but decent with computers. "
				+ "My interest in design stems from my enjoyment of helping others. I actively imagine the kinds of "
				+ "applications and well-built websites that could be useful to people." ;

//Assign the variable with content to the reference
aboutMe.textContent = aboutContent;


// About Me Heading
var aboutHeading = document.getElementById("aboutHeading");

var headerContent = "About Me";

aboutHeading.innerHTML = headerContent;
