 
 var teacherGrade = [];
 var teacherGender = [];
 var teacherClub = [];
 var teacherDetails = [];

// variable names set to arrays to store multiple announcements - these variables store the announcements that the teachers set

 var counter = 0 ;

 // set counter to 0 - this counts the number of announcements that the teacher sets

function getTData() {

	teacherGrade[counter] = document.getElementById('htmlTGrade').value ;
	teacherGender[counter] = document.getElementById('htmlTGender').value ;
	teacherClub[counter] = document.getElementById('htmlTClub').value ;
	teacherDetails[counter] = document.getElementById('htmlTAnnouncement').value ;

	// get html values selected by user to assigned variables - the values that the user selects on the front end are saved in these variables
	// by adding [counter], we attach the counter value to the variable - this sets it to the respective number

	counter++;

	// every time the function is run, it adds 1 to counter variable - incrementing it for the next announcement to go into the array

	
	localStorage.setItem("teacherGrKey", JSON.stringify(teacherGrade));
	localStorage.setItem("teacherGenderKey", JSON.stringify(teacherGender));
	localStorage.setItem("teacherClubKey", JSON.stringify(teacherClub));
	localStorage.setItem("teacherDetailsKey", JSON.stringify(teacherDetails));

	//local storage : save all values selected from teachercreator.html that the user selects
	//stringify all values - sets all values to string, this makes it easier to present to users
	//stores to Key, saves to respective variable

}

function checkArray() {

	var checkGender; 

	checkGender = JSON.parse(localStorage.getItem("teacherGrKey"));
	alert("Gender from Local Storage = ", checkGender);

}

function getExistingAnnouncements() {

	if (JSON.parse(localStorage.getItem("teacherGrKey")) != null) {
		// if the local storage does NOT equal blank, run this to get existing announcements

	teacherGrade = JSON.parse(localStorage.getItem("teacherGrKey"));
	teacherGender = JSON.parse(localStorage.getItem("teacherGenderKey"));
	teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));
	teacherDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"));

	// retrieve stringified array
	// this is useful when we already have announcements saved in the system, it saves it to a new string in the preset array

	counter = teacherGrade.length;
	// if we want to write another announcement, it'll have to go in an empty spot - if we have 2 announcements, number '2' of the array will
	// be available for next announcement [0, 1] stores 2 announcements..

	// index to point to the next element in the array (where we will put the next announcement)

}
}
