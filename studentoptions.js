var stuGrade
var stuGender
var stuClub

// variable names that store the student options selected on the front end

function getStuData() {

	stuGrade = document.getElementById('htmlSGrade').value
	stuGender = document.getElementById('htmlSGender').value
	stuClub = document.getElementById('htmlSClub').value

	// save html values selected by user to assigned variables

	localStorage.setItem ("studentGrKey", stuGrade)
	localStorage.setItem ("studentGenderKey", stuGender)
	localStorage.setItem ("studentClubKey", stuClub)

	//local storage : save variables values that the user selected to the console system. 


}