
const cmaPrograms = [
	{
		id: "1",
		program_name:
			"HTML document that illustrates a) Image as a background b) Hyperlink using an image c) Hyperlink with another web page (A, Base, Href) d) Link to email address, FTP Websites",
		focused_on: [
			"HTML Background Image",
			"Image Hyperlink",
			"Web Page Hyperlink",
			"Email/FTP Links",
		],
		code: `<!DOCTYPE html>
  <html>
  <head>
	<title>e-mail</title>
  </head>
  <body>
	<h1><font color="yellow">a.Image as background</font></h1>
	<body background="4.jpg">
	<h1><font color="yellow">b.Hyperlink using an image</font></h1>
	<a href="http://www.google.com"><font color="white" size="5">click on the image</font><br>
	<img src="5.jpg"></a>
	<h1><font color="yellow">c.Hyperlink with another webpage</font></h1>
	<a href="first.html"><font color="white" size="5">click here</font></a>
	<h1><font color="yellow">d.Link to e-mail address</font></h1>
	<a href="http://mail.google.com"><font color="white" size="5">link to send mail</font></a>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
	{
		id: "2",
		program_name:
			"Develop a webpage to play audio file using <a> tag and video file using <embed> tag",
		focused_on: ["HTML Audio Tag", "HTML Embed Tag", "Multimedia Playback"],
		code: `<!DOCTYPE html>
  <html>
  <head>
	<title>Audio and Video</title>
  </head>
  <body>
	<audio controls autoplay loop>
	  <source src="music.mp3">
	</audio>
	<br><br><br><br>
	<embed src="play.avi" type="video/avi" width="600" height="600">
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
	{
		id: "3",
		program_name:
			"Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar",
		focused_on: [
			"JavaScript Functions",
			"Leap Year Calculation",
			"Gregorian Calendar",
		],
		code: `<!DOCTYPE html>
  <html>
  <head>
	<title>JavaScript to check leap year</title>
  </head>
  <body>
	Input Year: <input type="text" id="year"/>
	<input type="button" id="button" onClick="isLeapYear()" value="Check Leap Year">
	<p id="DVG"></p>
	<script>
	  function isLeapYear() {
		var year = document.getElementById("year").value;
		if (year > 0) {
		  document.getElementById("DVG").innerHTML = (year % 4 == 0) ? "leap year" : "not a leap year";
		} else {
		  document.getElementById("DVG").innerHTML = "invalid input";
		}
	  }
	</script>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
	{
		id: "4",
		program_name:
			"Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit",
		focused_on: [
			"JavaScript Functions",
			"Temperature Conversion",
			"Fahrenheit to Celsius",
			"Celsius to Fahrenheit",
		],
		code: `<!DOCTYPE html>
  <html>
  <head>
	<title>Javascript program to convert temperature</title>
	<script>
	  function temperatureConverter(valNum) {
		valNum = parseFloat(valNum);
		document.getElementById("outputCelsius").innerHTML = (valNum - 32) / 1.8;
	  }
	  
	  function temperatureConverter1(valNum1) {
		valNum1 = parseFloat(valNum1);
		document.getElementById("outputFahrenheit").innerHTML = (valNum1 * 1.8) + 32;
	  }
	</script>
  </head>
  <body>
	<p><label>Fahrenheit</label>
	<input type="text" id="fahrenheit" oninput="temperatureConverter(this.value)" onchange="temperatureConverter(this.value)"></p>
	<p> Celsius: <span id="outputCelsius"></span></p>
	
	<p><label>Celsius</label>
	<input type="text" id="celsius" oninput="temperatureConverter1(this.value)" onchange="temperatureConverter1(this.value)"></p>
	<p>Fahrenheit: <span id="outputFahrenheit"></span></p>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
	{
		id: "5",
		program_name: "Create an animation using HTML",
		focused_on: ["CSS Animations", "Keyframes", "Animation Properties"],
		code: `<!DOCTYPE html>
  <html>
  <head>
	<style>
	  div {
		width: 100px;
		height: 100px;
		background-color: red;
		position: relative;
		animation-name: example;
		animation-duration: 4s;
	  }
	  
	  @keyframes example {
		0% { background-color: red; left: 0px; top: 0px; }
		25% { background-color: orange; left: 200px; top: 0px; }
		50% { background-color: green; left: 200px; top: 200px; }
		75% { background-color: blue; left: 0px; top: 200px; }
		100% { background-color: red; left: 0px; top: 0px; }
	  }
	</style>
  </head>
  <body>
	<h1>Animation</h1>
	<div></div>
	<p><b>note:</b> When an animation is finished, it goes back to its original style:</p>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
	{
		id: "6",
		program_name: "Create an interactive web page using HTML5 layout tags",
		focused_on: [
			"HTML5 Layout Tags",
			"Header",
			"Navigation",
			"Section",
			"Article",
			"Footer",
		],
		code: `<!DOCTYPE html>
  <html>
  <head>
	<title>HTML5 Layout Example</title>
	<style>
	  body {
		font-family: Arial;
		margin: 0;
		padding: 0;
	  }
	  
	  header {
		background-color: #333;
		color: #fff;
		padding: 10px;
		text-align: center;
	  }
	  
	  nav {
		background-color: #555;
		color: #fff;
		padding: 10px;
		text-align: center;
	  }
	  
	  section {
		padding: 20px;
	  }
	  
	  article {
		margin-bottom: 20px;
	  }
	  
	  footer {
		background-color: #333;
		color: #fff;
		padding: 10px;
		text-align: center;
	  }
	</style>
  </head>
  <body>
	<header>
	  <h1>Header</h1>
	</header>
	
	<nav>
	  <ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Services</a></li>
		<li><a href="#">Contact</a></li>
	  </ul>
	</nav>
	
	<section>
	  <article>
		<h2>Article1</h2>
		<p>This is the content of Article 1.</p>
	  </article>
	  <article>
		<h2>Article2</h2>
		<p>This is the content of Article 2.</p>
	  </article>
	</section>
	
	<footer>
	  <p>Footer</p>
	</footer>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
	{
		id: "7",
		program_name:
			"Write a JavaScript that calculates the squares & cubes of the numbers from 0 to 10 and outputs HTML text that displays the resulting values in an HTML table format",
		focused_on: [
			"JavaScript Loop",
			"Math Operations",
			"HTML Table",
			"Dynamic Content",
		],
		code: `<!DOCTYPE html>
  <html>
  <head>
	<title>Squares & Cubes</title>
  </head>
  <body>
	<center>
	  <table border="1">
		<tr><th>number</th><th>square</th><th>cube</th></tr>
		<script>
		  for (var i = 0; i <= 10; i++) {
			document.write("<tr><td>" + i + "</td><td>" + i * i + "</td><td>" + i * i * i + "</td></tr>");
		  }
		</script>
	  </table>
	</center>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
	{
		id: "8",
		program_name:
			"A canvas is a rectangle like area on an HTML page. It is specified with canvas element. By default, the <canvas> element has no border and no content, it is like a container",
		focused_on: ["HTML Canvas", "2D Context", "Drawing Text", "Canvas Styling"],
		code: `<!DOCTYPE html>
  <html>
  <head>
	<title>Hello Canvas!</title>
  </head>
  <body>
	<canvas id="canvas" width="400" height="100" style="border:1px solid #d3d3d3;"></canvas>
	<script>
	  var canvas = document.getElementById("canvas");
	  var c = canvas.getContext("2d");
	  c.font = "50pt Arial";
	  c.fillStyle = 'gray';
	  c.strokeStyle = "black";
	  var x = 20;
	  var y = 60;
	  var text = 'Hello Text!';
	  c.fillStyle = 'blue';
	  c.fillText(text, x, y);
	  c.strokeText(text, x, y);
	</script>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
	{
		id: "9",
		program_name:
			"Develop and demonstrate a HTML document that illustrates a) the use of Formatting Text b) Headings tags (H1, H2, H3, H4, H5, H6) c) Font Details (Font Size, Style, Typo, Color) d) Setting Color (BG Color)",
		focused_on: [
			"HTML Formatting Tags",
			"Heading Tags",
			"Font Properties",
			"Background Color",
		],
		code: `<!DOCTYPE html>
  <html>
  <head>
	<title>Formatting Text</title>
  </head>
  <body background="C:UserslPubliclPictureslSample PictureslLighthouse.jpg">
	<small>This is small</small>
	<mark>DVSCollege</mark>
	<p>my address is <del>shimogga</del></p>
	<p>my address is <ins>shimogga</ins></p>
	<p>my address is <sub>shimogga</sub></p>
	<p>my address is <sup>shimogga</sup></p>
	<p>my address is <strong>shimogga</strong></p>
  </body>
  </html>
  <!DOCTYPE html>
  <html>
  <head>
	<title>Demonstrate HTML program</title>
  </head>
  <body bgcolor="pink">
	<h1>welcome</h1>
	<h2>welcome</h2>
	<h3>welcome</h3>
	<h4>welcome</h4>
	<h5>welcome</h5>
	<h6>welcome</h6>
	<font style="Times New Roman" size="18" color="red" type="bold">
	  This is font tag example
	</font>
	<b>Font example for bold</b><br>
	<i>Font example for italic</i><br>
	<u>Font example for underline</u><br>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
	{
		id: "10",
		program_name:
			"Develop and demonstrate a HTML document that illustrates a) Unordered List (UL) b) Ordered List (OL) and Definition list (DL) c) Table Alignment (Cell Spacing, Cell Padding,Height, Width,Border,Rowspan, colspan) d) Setting Different Table Attributes (Color,Image)",
		focused_on: [
			"HTML Lists",
			"Table Attributes",
			"Table Styling",
			"Definition Lists",
		],
		code: `<!DOCTYPE html>
  <html>
  <head>
	<title>HTML Unordered List</title>
  </head>
  <body>
	<ul type="square">
	  <li>Beetroot</li>
	  <li>Ginger</li>
	  <li>Potato</li>
	  <li>Radish</li>
	</ul>
  
	<ol type="1">
	  <li>Beetroot</li>
	  <li>Ginger</li>
	  <li>Potato</li>
	  <li>Radish</li>
	</ol>
  
	<dl>
	  <dt><b>HTML</b></dt>
	  <dd>This stands for Hyper Text Markup Language</dd>
	  <dt><b>HTTP</b></dt>
	  <dd>This stands for Hyper Text Transfer Protocol</dd>
	</dl>
  </body>
  </html>
  <!DOCTYPE html>
  <html>
  <head>
	<title>Working with tables</title>
  </head>
  <body bgcolor="pink">
	<table bgcolor="yellow" border="2" height="30%" width="50%" cellpadding="15" cellspacing="15" border="solid">
	  <caption>SALES REPORT</caption>
	  <tr>
		<th>Date</th>
		<th>Product</th>
		<th>Units Sold</th>
		<th>Revenue</th>
		<th>Remarks</th>
	  </tr>
	  <tr>
		<td>2024-05-01</td>
		<td>ProductA</td>
		<td>100</td>
		<td>$1000</td>
		<td rowspan="2">Mention remarks here<img src=".jpg"></td>
	  </tr>
	  <tr>
		<td colspan="2">Total</td>
		<td>325</td>
		<td>$5500</td>
	  </tr>
	</table>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
	{
		id: "11",
		program_name:
			"Design a timetable and display it in tabular format using html",
		focused_on: ["HTML Tables", "Table Styling", "Timetable Layout"],
		code: `<!DOCTYPE html>
  <html>
  <head>
	<title>Timetable</title>
	<style>
	  body {
		font-family: Arial, sans-serif;
	  }
	  
	  table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 20px;
	  }
	  
	  th, td {
		border: 1px solid #dddddd;
		text-align: center;
		padding: 8px;
	  }
	  
	  th {
		background-color: pink;
		color: blue;
	  }
	  
	  td {
		background-color: pink;
		color: red;
	  }
	</style>
  </head>
  <body>
	<h2>Weekly Timetable</h2>
	<table>
	  <tr>
		<th>Time</th>
		<th>Monday</th>
		<th>Tuesday</th>
		<th>Wednesday</th>
		<th>Thursday</th>
		<th>Friday</th>
	  </tr>
	  <tr>
		<td>9:00-10:00</td>
		<td>Math</td>
		<td>Science</td>
		<td>English</td>
		<td>History</td>
		<td>Art</td>
	  </tr>
	  <tr>
		<td>10:00-11:00</td>
		<td>Physics</td>
		<td>Math</td>
		<td>Chemistry</td>
		<td>Geography</td>
		<td>Music</td>
	  </tr>
	  <tr>
		<td>11:00-12:00</td>
		<td>History</td>
		<td>English</td>
		<td>Biology</td>
		<td>Physics</td>
		<td>Physical Education</td>
	  </tr>
	  <tr>
		<td>12:00-1:00</td>
		<td colspan="5">Lunch</td>
	  </tr>
	  <tr>
		<td>1:00-2:00</td>
		<td>Geography</td>
		<td>Art</td>
		<td>Math</td>
		<td>Chemistry</td>
		<td>Computer Science</td>
	  </tr>
	  <tr>
		<td>2:00-3:00</td>
		<td>Physical Education</td>
		<td>Music</td>
		<td>Physics</td>
		<td>Biology</td>
		<td>Geography</td>
	  </tr>
	</table>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
	{
		id: "12",
		program_name:
			"Design signup form to validate username,password,and phone numbers etc. using Java script",
		focused_on: ["HTML Forms", "JavaScript Validation", "Form Styling"],
		code: `<!DOCTYPE html>
  <html lang="en">
  <head>
	<title>Signup Form</title>
	<style>
	  .error {
		color: red;
	  }
	</style>
  </head>
  <body>
	<h2>Signup Form</h2>
	<form id="signupForm" onsubmit="return validateForm()">
	  <label for="username">Username:</label><br>
	  <input type="text" id="username" name="username"><br>
	  <span id="usernameError" class="error"></span><br>
	  
	  <label for="password">Password:</label><br>
	  <input type="password" id="password" name="password"><br>
	  <span id="passwordError" class="error"></span><br>
	  
	  <label for="phone">Phone Number:</label><br>
	  <input type="text" id="phone" name="phone"><br>
	  <span id="phoneError" class="error"></span><br>
	  
	  <input type="submit" value="Signup">
	</form>
	
	<script>
	  function validateForm() {
		var username = document.getElementById('username').value.trim();
		var password = document.getElementById('password').value.trim();
		var phone = document.getElementById('phone').value.trim();
		
		var usernameError = document.getElementById('usernameError');
		var passwordError = document.getElementById('passwordError');
		var phoneError = document.getElementById('phoneError');
		
		var isValid = true;
		
		if (username === "") {
		  usernameError.textContent = 'Username is required';
		  isValid = false;
		} else {
		  usernameError.textContent = "";
		}
		
		if (password.length < 6) {
		  passwordError.textContent = 'Password must be at least 6 characters long';
		  isValid = false;
		} else {
		  passwordError.textContent = "";
		}
		
		var phoneRegex = /^\d{10}$/;
		if (!phone.match(phoneRegex)) {
		  phoneError.textContent = 'Phone number must be 10 digits';
		  isValid = false;
		} else {
		  phoneError.textContent = "";
		}
		
		return isValid;
	  }
	</script>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
	{
		id: "13",
		program_name:
			"Write a JavaScript to design a simple calculator to perform the following operations: sum, product, difference and quotient",
		focused_on: [
			"JavaScript Functions",
			"Calculator Operations",
			"Form Elements",
		],
		code: `<!DOCTYPE html>
  <html>
  <head>
	<title>JavaScript Calculator</title>
	<style>
	  #cleart {
		width: 270px;
		border: 3px solid gray;
		border-radius: 3px;
		padding: 20px;
		background-color: red;
	  }
	  
	  .formstyle {
		width: 300px;
		height: 530px;
		margin: auto;
		border: 3px solid skyblue;
		border-radius: 5px;
		padding: 20px;
	  }
	  
	  input {
		width: 20px;
		background-color: green;
		color: white;
		border: 3px solid gray;
		border-radius: 5px;
		padding: 26px;
		margin: 5px;
		font-size: 15px;
	  }
	  
	  #calct {
		width: 250px;
		border: 5px solid black;
		border-radius: 3px;
		padding: 20px;
		margin: auto;
	  }
	</style>
  </head>
  <body>
	<div class="formstyle">
	  <form name="form1">
		<br><br>
		<input type="button" value="9" onclick="form1.answer.value += '9'">
		<input type="button" value="*" onclick="form1.answer.value += '*'">
		<br><br>
		<input type="button" value="/" onclick="form1.answer.value += '/'">
		<input type="button" value="0" onclick="form1.answer.value += '0'">
		<input type="button" value="=" onclick="form1.answer.value = eval(form1.answer.value)">
		<br>
		<input type="text" id="clear">
		<br>
	  </form>
	</div>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
	{
		id: "14",
		program_name:
			"Develop and demonstrate a HTMLS file that includes JavaScript script that uses functions for the following problems: a.Paramcter:A string b.Output:The position in the string of the let-most vowel c.Parameter:Anumber d.Output:The number with its digits in the reverse order",
		focused_on: [
			"JavaScript Functions",
			"String Manipulation",
			"Number Reversal",
		],
		code: `<!DOCTYPE html>
  <html>
  <body>
	<script type="text/javascript">
	  var str = prompt("Enter the Input", "");
	  if (isNaN(str)) {
		var num, rev = 0, remainder;
		num = parseInt(str);
		while (num != 0) {
		  remainder = num % 10;
		  num = parseInt(num / 10);
		  rev = rev * 10 + remainder;
		}
		alert("Reverse of " + str + " is " + rev);
	  } else {
		str = str.toUpperCase();
		for (var i = 0; i < str.length; i++) {
		  var chr = str.charAt(i);
		  if (chr == 'A' || chr == 'E' || chr == 'I' || chr == 'O' || chr == 'U') {
			alert("The position of the left most vowel is " + (i + 1));
			break;
		  }
		  if (i == str.length - 1) {
			alert("No vowel found in the entered string");
		  }
		}
	  }
	</script>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>
  `,
		external_css: "",
		external_js: "",
	},
	{
		id: "15",
		program_name: `Select a country :<select id="countries"onchange=getCapitalO>`,
		focused_on: ["JavaScript Functions", "Dropdown Lists", "Event Handling"],
		code: `<!DOCTYPE html>
  <html>
  <body>
	Select a country :
	<select id="countries" onchange="getCapital()">
	  <option value="0">Australia</option>
	  <option value="1">Poland</option>
	  <option value="2">Mexico</option>
	  <option value="3">Germany</option>
	  <option value="4">India</option>
	</select>
	<br><br>
	Capital: <input type="text" id="txtbox">
	
	<script>
	  function getCapital() {
		var capitals = ["Canberra", "Warsaw", "Mexico City", "Berlin", "New Delhi"];
		var i = document.getElementById("countries").selectedOptions[0].value;
		document.getElementById("txtbox").value = capitals[i];
	  }
	</script>
	<footer>Dept of Computer Science<br>DVS College of Arts and Science, Shimoga</footer>
  </body>
  </html>`,
		external_css: "",
		external_js: "",
	},
];

export const pythonPrograms = [];

export const getAllPrograms = (subject) => {
	if (subject === "cma") {
		return cmaPrograms;
	} else if (subject === "python") {
		return pythonPrograms;
	}
	return [];
};

export const getProgram = (subject, id) => {
	const programs = getAllPrograms(subject);
	return programs.find((program) => program.id == id);  // Using loose equality
  };