console.log("Sneaky one, aren't ya?");
var keepGoing = true;
var pageNum = 0;
var totalPages = 5000;
function nextPage() {
	pageNum = pageNum + 1;
	switchPage(pageNum);
	var result = " " + pageNum + " of " + totalPages + " ";
	document.getElementById("pagecount").innerHTML = result;
}
function prevPage() {
	if(pageNum==0) {
		window.location.href = "index.html"
	}
	pageNum = pageNum - 1;
	switchPage(pageNum);
	var result = " " + pageNum + " of " + totalPages + " ";
	document.getElementById("pagecount").innerHTML = result;
}

var studentName = "";
var firstName = "";
var programType = -1;
function switchPage(page) {
	if(page==0) {
		document.getElementById("javascript-generator").innerHTML = "" + 
		"<h3>Welcome! I'll be asking you a few quick questions.</h3>" + 
		"<p>You will receive your letter immediately after.</p>" + 
		"<p>Make sure you have read the privacy policy and license first.</p>";
	}
	if(page==1) {
		document.getElementById("javascript-generator").innerHTML = ""+
		"<h3>Let's get to know the student:</h3>" + 
		"<p>What is their full name?</p>" + 
		"<input type=\"text\" name=\"inputbox\"  placeholder=\"eg. Jane Doe\" id=\"stuName\">";
	}
	if(page==2) {
		keepGoing = true;
		try {studentName = document.getElementById("stuName").value;} catch(e_var_0) {}
		console.log("name: " + studentName);
		if(studentName === "") {
			prevPage();
			console.log("Executed prevpage: no valid name");
			keepGoing = false;
		}
		try {
			if(studentName.indexOf(" ") != -1) {
				firstName = studentName.substring(0, studentName.indexOf(" "));
			} else {
				firstName = studentName;}
		} catch(e_var_1) {
			firstName = studentName;
		}
		if(keepGoing) {
		document.getElementById("javascript-generator").innerHTML = "" + 
		"<h3>Please verify the follwing</h3>" + 
		"<p>I gather the student's first name to be " + firstName + ".</p>" + 
		"<p>Is this correct?</p><p></p>" + 
		"<input type=\"radio\" name=\"correctfirst\" onclick=\"page2no()\">No " + 
		"<input type=\"radio\" name=\"correctfirst\"> Yes"; }
	} if(page==3) {
		try { 
		if(!(document.getElementById("modFirstName")==="")){
		firstName = document.getElementById("modFirstName").value; }} catch(e_var_2) {}
		console.log("First name " + firstName);
		document.getElementById("javascript-generator").innerHTML = "" + 
		"<h3>Let's get to know the context of the letter</h3>" + 
		"<p>Please specify the type of subject you are recommending " + firstName + " to: </p>" + 
		"<input type=\"radio\" name=\"institution\" onclick=\"page3inst(0)\">Nothing in particular<br>" + 
		"<input type=\"radio\" name=\"institution\" onclick=\"page3inst(1)\">A university<br>" + 
		"<input type=\"radio\" name=\"institution\" onclick=\"page3inst(2)\">A summer program<br>";
	} if(page==4) {
		keepGoing = programType != -1
		if(!keepGoing) { prevPage(); console.log("Executed prevpage, no programme specified"); }
		else { document.getElementById("javascript-generator").innerHTML = ""; }
	}
}
var page2noRan = true;
function page2no(){
	if(page2noRan) {
	document.getElementById("javascript-generator").innerHTML += "<p></p>" +
	"<p>Please enter their correct first name: </p>" + 
	"<input type=\"text\" name=\"inputbox\"  placeholder=\"eg. Jane\" id=\"modFirstName\">";
	page2noRan=false;}
}
function page3inst(x) { programType = x; }
