// File: app.js 
// Author: Tamara Howell
// Site: http://comp1073-a2.azurewebsites.net/
// Description: Contains JavaScript for Project 2

/* javascript lives here */
"use strict";

// IIFE - Immediately Invoked Function Expression

(function () { // Beginning of the IIFE

  console.log("App Started...");
  console.info(`Page Title: ${document.title}`); // string interpolation

  switch (document.title) {
    case "Home":
//reference an element
let aboutMe = document.getElementById("aboutMe");

//create variable that contains content
let aboutContent = "Hello! My name is Tamara. I'm a second semester web design student at Georgian College. "
				+ "I enjoy long walks, gardening and knitting. I'm like your Nana, but decent with computers. "
				+ "My interest in design stems from my enjoyment of helping others. I actively imagine the kinds of "
				+ "applications and well-built websites that could be useful to people." ;

//Assign the variable with content to the reference
aboutMe.textContent = aboutContent;


// About Me Heading
let aboutHeading = document.getElementById("aboutHeading");

let headerContent = "About Me";

aboutHeading.innerHTML = headerContent;


      break;

    case "Projects":

//Page heading

let projectsHeading = document.getElementById("projectsHeading");

let projectHeadingContent = "My Projects";

projectsHeading.textContent = projectHeadingContent;

//First project heading

let firstHeading = document.getElementById("firstProjectHeading");

let firstHeadingContent = "Homeohealth Center";

firstHeading.textContent = firstHeadingContent;

//First project info

let firstInfo = document.getElementById("firstProjectInfo");

let firstInfoContent = "As the Homeohealth Center brand was emerging, I was able to create a logo and "
					+ "original content for the owner.";

firstInfo.textContent = firstInfoContent;

//Second project heading

let secondHeading = document.getElementById("secondProjectHeading");

let secondHeadingContent = "Iris Group";

secondHeading.textContent = secondHeadingContent;

//Second project info

let secondInfo = document.getElementById("secondProjectInfo");

let secondInfoContent = "After the Iris Group lost contact with their designer, they requested my help in "
					+ "creating new content. This involved designing brochures, mail labels and newsletters.";

secondInfo.textContent = secondInfoContent;

//Third project heading

let thirdHeading = document.getElementById("thirdProjectHeading");

let thirdHeadingContent = "Freehand Doodles";

thirdHeading.textContent = thirdHeadingContent;

//Third project info

let thirdInfo = document.getElementById("thirdProjectInfo");

let thirdInfoContent = "My freehand illustrations may not require any technical skill, but they are "
				+ "useful in creating more casual content.";
			
thirdInfo.textContent = thirdInfoContent;

	break;

	case "Contact":

// Form Main Heading

let contactHeading = document.getElementById("contactHeading");

let contactHeadingContent = "Let's Connect!";

contactHeading.textContent = contactHeadingContent;

//------------------  Form h3's  ------------------------------

//Contact Name

let contactName = document.getElementById("name");

let nameHeading = "Name";

contactName.textContent = nameHeading;

//Contact Email

let contactEmail = document.getElementById("email");

let emailContent = "Email Address";

contactEmail.textContent = emailContent;

//Contact Message

let contactMessage = document.getElementById("message");

let messageContent = "Your message";

contactMessage.textContent = messageContent;

//Submit user inputs

let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userMessage = document.getElementById("userMessage");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(event) {
	event.preventDefault();

//Had trouble printing these, git .value idea from stack overflow
	console.log(userName.value);
	console.log(userEmail.value);
	console.log(userMessage.value);

}); 

break;

  }

})(); // end of the IIFE