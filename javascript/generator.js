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
var gender = -1;
var programType = -1;
var programName = "";

var programs = ["", "university", "program", "employment"];
var pronouns = ["he", "she", "they"];
var proref = ["him", "her", "them"];

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
		"<input type=\"radio\" name=\"correctfirst\" onclick=\"page2yes()\"> Yes"; }
	} if(page==3) {
		try{
		firstName = document.getElementById("modFirstName").value; } catch(e_var_2) {}
		console.log("First name: " + firstName);
		document.getElementById("javascript-generator").innerHTML = "" +
		"<h3>Please everify the following</h3>" + 
		"<p>What is the student's gender?</p>" + 
		"<input type=\"radio\" name=\"genderradio\" onclick=\"page3sex(0)\">Male<br>" + 
		"<input type=\"radio\" name=\"genderradio\" onclick=\"page3sex(1)\">Female<br>" +
		"<input type=\"radio\" name=\"genderradio\" onclick=\"page3sex(2)\">Other/Unknown<br>";
	} if(page==4) {
		keepGoing = gender != -1;
		if(!keepGoing) { prevPage(); console.log("Executed prevpage, no gender option given");
		}else{
			console.log("gender: " + pronouns[gender] + " / " + proref[gender]); 
		document.getElementById("javascript-generator").innerHTML = "" + 
		"<h3>Let's get to know the context of the letter</h3>" + 
		"<p>Please specify the type of subject you are recommending " + firstName + " to: </p>" + 
		"<input type=\"radio\" name=\"institution\" onclick=\"page4inst(0)\">Nothing in particular<br><br>" + 
		"<input type=\"radio\" name=\"institution\" onclick=\"page4inst(1)\">A university<br><br>" + 
		"<input type=\"radio\" name=\"institution\" onclick=\"page4inst(2)\">A summer program<br><br>" + 
		"<input type=\"radio\" name=\"institution\" onclick=\"page4inst(3)\">A job<br>";}
	} if(page==5) {
		keepGoing = programType != -1;
		if(!keepGoing) { prevPage(); console.log("Executed prevpage, no programme specified");
		}else{
		if(programType==0) { nextPage(); console.log("type: none");}
		else {
			console.log("type: " + programs[programType]);
			document.getElementById("javascript-generator").innerHTML = "" + 
			"<h3>Tell us about the " + programs[programType] + ":</h3>" + 
			"<p>What is its name?</p>" + 
			"<input type=\"text\" name=\"inputbox\"  placeholder=\"eg. The Krusty Krab\" id=\"instName\">";
		}}
	} if(page==6) {
		if(programType!=0) {
                keepGoing = true;
                try {programName = document.getElementById("instName").value;} catch(e_var_0) {}
                console.log("programme name: " + programName);
                if(programName === "") {
                	prevPage();
                        console.log("Executed prevpage: no valid programme name");
                        keepGoing = false;
                  }
		}
		if(keepGoing) {document.getElementById("javascript-generator").innerHTML = "<h3>How do you feel about " + 
		firstName + "?</h3>" + 
		"<p>What traits do you see in them?</p>" + 
		"<input type=\"checkbox\" name=\"traits\" value=\"0\">Kind<br>" + 
		"<input type=\"checkbox\" name=\"traits\" value=\"1\">Detail-oriented<br>";}
	}

}
var page2noRan = true;
function page2no(){
	if(page2noRan) {
	document.getElementById("javascript-generator").innerHTML += "<div id=\"modFirstName\"><p></p>" +
	"<p>Please enter their correct first name: </p>" + 
	"<input type=\"text\" name=\"inputbox\"  placeholder=\"eg. Jane\"></div>";
	page2noRan=false;}
}
function page2yes(){
	try {
		var box = document.getElementById("modFirstName");
		box.parentNode.removeChild(box);
		page2noRan = true;
	} catch(f_exp_var_1) {
	}
}
function page3sex(x) { gender = x; }
function page4inst(x) { programType = x; }
