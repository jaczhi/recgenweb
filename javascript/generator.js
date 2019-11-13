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

var traitArr = [false, false, false, false, false, false, false];
var traitNames = ["Kind", "Detail-oriented", "Responsible", "Team Player", "Quick-thinking", "Works Under Pressure", "OTHER"];
var otherTrait = "";
var traitEmph = [-1, -1, -1, -1, -1, -1, -1];

var teacherName = "";
var title = 0;
var titleArr = ["", "Dr. ", "Mr. ", "Mrs. ", "Ms."];
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
		if(keepGoing) {
		//traitArr = [false, false, false, false, false, false, false];
		document.getElementById("javascript-generator").innerHTML = "<h3>How do you feel about " + 
		firstName + "?</h3>" + 
		"<p>What traits do you see in them?</p>" + 
		"<input type=\"checkbox\" name=\"traits\" value=\"0\" onclick=\"page6traits(0)\">Kind<br>" + 
		"<input type=\"checkbox\" name=\"traits\" value=\"1\" onclick=\"page6traits(1)\">Detail-oriented<br>" + 
		"<input type=\"checkbox\" name=\"traits\" value=\"2\" onclick=\"page6traits(2)\">Responsible<br>" + 
		"<input type=\"checkbox\" name=\"traits\" value=\"3\" onclick=\"page6traits(3)\">Team Player<br>" + 
		"<input type=\"checkbox\" name=\"traits\" value=\"4\" onclick=\"page6traits(4)\">Quick-Thinking<br>" + 
		"<input type=\"checkbox\" name=\"traits\" value=\"5\" onclick=\"page6traits(5)\">Works Under Pressure<br>" + 
		"<input type=\"checkbox\" name=\"traits\" value=\"6\" onclick=\"page6traits(6)\">Other<br>";}
	} if(page==7) {
		var override = false;
		keepGoing = true;
                try {otherTrait = document.getElementById("extraTrait").value;}
		catch(e_var_0) {override = true;}
                console.log("name: " + studentName);
                if(otherTrait === "" && !override) {
			prevPage();
                        console.log("Executed prevpage: no valid trait");
                        keepGoing = false;
                }

		if(keepGoing) { 
		document.getElementById("javascript-generator").innerHTML = "<h3>How do you feel about " + firstName + "?</h3>" +
		"<p>Please select how much you want to mention these traits:</p>" +
		"";
		var result = "";
		for(var i=0; i<traitArr.length; i++) {
			if(traitArr[i]) {
				var traitName=""
				if(i==6){traitName=otherTrait;}
				else{traitName=traitNames[i];}
				result += "<h4>" + traitName + "</h4>";
				result += "Less <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" class=\"slider\" id=\"traitRange" + i + "\"> More";
			}
		}
		document.getElementById("javascript-generator").innerHTML += result;}
	} if(page==8) {
		for(var i=0; i<traitArr.length; i++) {
			if(document.getElementById("traitRange" + i) != null) {
				traitEmph[i] = document.getElementById("traitRange" + i).value;
				console.log(i + ": " + traitEmph[i]);
			}
		}
		document.getElementById("javascript-generator").innerHTML = "" +
		"<h3>Let's get to know you:</h3>" +
		"<p>What is your name?</p>" + 
		"<input type=\"text\" name=\"inputbox\"  placeholder=\"eg. Jane Doe\"     id=\"teachName\">";
	} if(page==9) {
		keepGoing = true;
		try {teacherName = document.getElementById("teachName").value;} catch(e_var_60) {}
		if(teacherName === "") {
			prevPage();
			console.log("Executed prevpage, no valid teacher name");
			keepGoing = false;
		}
		if(keepGoing) {
			document.getElementById("javascript-generator").innerHTML = "" + 
			"<h3>Let's get to know you:</h3>" + 
			"<p>What is your preferred title?</p>" + 
			"<select>" + 
			"<option value=\"none\" onclick=\"page9title(0)\">None</option>" + 
			"<option value=\"dr\" onclick=\"page9title(1)\">Dr.</option>" + 
			"<option value=\"mr\" onclick=\"page9title(2)\">Mr.</option>"+
			"<option value=\"mrs\" onclick=\"page9title(3)\">Mrs.</option>" +
			"<option value=\"ms\" onclick=\"page9title(4)\">Ms.</option>" + 
			"</select>";
		}
	} if(page==10) {
		document.getElementById("javascript-generator").innerHTML = "<h3>Customization</h3>" + 
		"<p>Please choose your writer</p>" + 
		"<p>Please be patient. Work in progress</p>"
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
toggle6 = true;
var temp;
function page6traits(x) {
	if(x==6 && toggle6) {
	temp = document.getElementById("javascript-generator").innerHTML;
	document.getElementById("javascript-generator").innerHTML += "<br><p>Add a trait...<p><input type=\"text\" name=\"traitbox\" placeholder=\"eg. smart\" id=\"extraTrait\">";
	toggle6=!toggle6;
	}else if(x==6 && !toggle6) {
	document.getElementById("javascript-generator").innerHTML = temp;
	toggle6=!toggle6;
	}
	traitArr[x] = !traitArr[x]; 
	console.log("trait toggled to " + traitArr[x]);
 }
 function page9title(x) {
 	title = x;
	console.log(x + ": " + titleArr[x]);
 }
 	
