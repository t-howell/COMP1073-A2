// File: app.js 
// Author: Tamara Howell
// Site: http://comp1073-a1.azurewebsites.net/
// Description: Contains JavaScript for About Me page

/* javascript lives here */
"use strict";

// IIFE - Immediately Invoked Function Expression

(function () { // Beginning of the IIFE

  console.log("App Started...");
  console.info(`Page Title: ${document.title}`); // string interpolation

  switch (document.title) {
    case "Home":
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


      break;

    case "Projects":

//Page heading

var projectsHeading = document.getElementById("projectsHeading");

var headingContent = "My Projects";

projectsHeading.textContent = headingContent;

//First project heading

var firstHeading = document.getElementById("firstProjectHeading");

var firstHeadingContent = "Homeohealth Center";

firstHeading.textContent = firstHeadingContent;

//First project info

var firstInfo = document.getElementById("firstProjectInfo");

var firstInfoContent = "As the Homeohealth Center brand was emerging, I was able to create a logo and "
					+ "original content for the owner.";

firstInfo.textContent = firstInfoContent;

//Second project heading

var secondHeading = document.getElementById("secondProjectHeading");

var secondHeadingContent = "Iris Group";

secondHeading.textContent = secondHeadingContent;

//Second project info

var secondInfo = document.getElementById("secondProjectInfo");

var secondInfoContent = "After the Iris Group lost contact with their designer, they requested my help in "
					+ "creating new content. This involved designing brochures, mail labels and newsletters.";

secondInfo.textContent = secondInfoContent;

//Third project heading

var thirdHeading = document.getElementById("thirdProjectHeading");

var thirdHeadingContent = "Freehand Doodles";

thirdHeading.textContent = thirdHeadingContent;

//Third project info

var thirdInfo = document.getElementById("thirdProjectInfo");

var thirdInfoContent = "My freehand illustrations may not require any technical skill, but they are "
				+ "useful in creating more casual content.";
			
thirdInfo.textContent = thirdInfoContent;

	break;

	case "Contact":

// Form Main Heading

var contactHeading = document.getElementById("contactHeading");

var headingContent = "Let's Connect!";

contactHeading.textContent = headingContent;

//------------------  Form h3's  ------------------------------

//Contact Name

var contactName = document.getElementById("name");

var nameHeading = "Name";

contactName.textContent = nameHeading;

//Contact Email

var contactEmail = document.getElementById("email");

var emailContent = "Email Address";

contactEmail.textContent = emailContent;

//Contact Message

var contactMessage = document.getElementById("message");

var messageContent = "Your message";

contactMessage.textContent = messageContent;

break;

  }

})(); // end of the IIFE