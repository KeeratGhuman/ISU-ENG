var teacherGrade = [] ;
var teacherGender = [] ; 
var teacherClub = [] ; 
var teacherDetails = [] ; 

// changed variables to arrays to store multiple announcements - this allows us to store multiple announcements and display them to the student
	
var stuGrade ;
var stuGender ;
var stuClub ;

// all variables - store globally so that all functions can access them

var announcementTextHolder = "";

// makes value of this variable to blank

var noResults = "Sorry, no announcements matched your criteria.";

// displays this when no criteria is matched

function displayAnnouncement() {

	teacherGrade = JSON.parse(localStorage.getItem("teacherGrKey"));

	teacherGender = JSON.parse(localStorage.getItem("teacherGenderKey"));

	teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));

	teacherDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"));

	//retrieves all items that the teacher inputted, stringify

	stuGrade = localStorage.getItem("studentGrKey");

	stuGender = localStorage.getItem("studentGenderKey");
	
	stuClub = localStorage.getItem("studentClubKey");

	for (var i = 0; i < teacherGender.length; i++) {

		// for loop checks how long the arrays are so that the if statement can run that many times

		if ((teacherGrade[i] === stuGrade || teacherGrade[i] == "All") &&
		(teacherGender[i] === stuGender || teacherGender[i] == "All") &&
		(teacherClub[i] === stuClub || teacherClub[i] == "All")) {

			// [i] is set to match announcement number to if statement

			announcementTextHolder += "<hr>" + teacherDetails[i] + "<hr>";

			// this adds blank announcement spaces to the teacher details variable - only if the if statement conditions match
			
		} 

	}

	if (announcementTextHolder == "") {

			announcementTextHolder = noResults;

			// if statement to run if no criteria matches
		}

	document.getElementById("htmlTAnnouncement").innerHTML = announcementTextHolder;

}