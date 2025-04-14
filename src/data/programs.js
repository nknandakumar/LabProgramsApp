export const cmaPrograms = [
	{
		id: 1,
		program_name: "Lab Program 1 ",//HTML Document Examples
		focused_on: "HTML Basics",
		code: '<html>\n<head>\n<title>e-mail</title></head>\n<body background="https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg?semt=ais_hybrid&w=740">\n<h1><font color="yellow">a.Image as background</font></h1>\n<h1><font color="yellow">b.Hyperlink using an image</font></h1>\n<a href="http://www.google.com"><font color="white" size="5">click on the image</font><br>\n<img src="https://www.shutterstock.com/image-vector/click-me-button-element-websites-600nw-682557868.jpg"></a>\n<h1><font color="yellow">c.Hyperlink with another webpage</font></h1>\n<a href="first.html"><font color="white" size="5">click here</font></a>\n<h1><font color="yellow">d.Link to e-mail address</font></h1>\n<a href="http://mail.google.com"><font color="white" size="5">link to send mail</font></a>\n</body>\n</html>',
		external_css: "",
		external_js: "",
	},
	{
		id: 2,
		program_name: "Multimedia",
		focused_on: "Multimedia",
		code: '<html>\n<head><title>Audio</title></head>\n<body>\n<audio controls autoplay loop>\n<source src="music.mp3">\n</audio>\n<br><br><br><br>\n<embed src="play.avi" type="video/avi" width="600" height="600">\n</embed>\n</body>\n</html>',
		external_css: "",
		external_js: "",
	},
	{
		id: 3,
		program_name: "JavaScript Leap Year Checker",
		focused_on: "JavaScript",
		code: '<html>\n<head><title>JavaScript to check leap year</title></head>\n<body>\nInput Year: <input type="text" id="year"/>\n<input type="button" id="button" onClick="isLeapYear()" value="Check Leap Year">\n<p id="DVG"></p>\n<script>\nfunction isLeapYear() {\n    var year = document.getElementById("year").value;\n    if (year > 0)\n        document.getElementById("DVG").innerHTML = (year % 4 == 0) ? "leap year" : "not a leap year";\n    else\n        document.getElementById("DVG").innerHTML = "invalid input";\n}\n</script>\n</body>\n</html>',
		external_css: "",
		external_js: "",
	},
	{
		id: 4,
		program_name: "JavaScript Temperature Converter",
		focused_on: "JavaScript",
		code: '<html>\n<head><title>JavaScript program to convert temperature to and from celsius, Fahrenheit</title>\n<script>\nfunction temperatureConverter(valNum) {\n    valNum = parseFloat(valNum);\n    document.getElementById("outputCelsius").innerHTML = (valNum - 32) / 1.8;\n}\nfunction temperatureConverter1(valNum1) {\n    valNum1 = parseFloat(valNum1);\n    document.getElementById("outputFahrenheit").innerHTML = (valNum1 * 1.8) + 32;\n}\n</script>\n</head>\n<body>\n<p><label>Fahrenheit</label>\n<input type="text" id="fahrenheit" oninput="temperatureConverter(this.value)" onchange="temperatureConverter(this.value)">\n</p>\n<p> Celsius: <span id="outputCelsius"></span></p>\n<p><label>Celsius</label>\n<input type="text" id="celsius" oninput="temperatureConverter1(this.value)" onchange="temperatureConverter1(this.value)">\n</p>\n<p>Fahrenheit: <span id="outputFahrenheit"></span></p>\n</body>\n</html>',
		external_css: "",
		external_js: "",
	},
	{
		id: 5,
		program_name: "HTML Animation",
		focused_on: "CSS Animation",
		code: "<html>\n<head>\n<style>\ndiv {\n    width: 100px;\n    height: 100px;\n    background-color: red;\n    position: relative;\n    animation-name: example;\n    animation-duration: 4s;\n}\n@keyframes example {\n    0% {background-color: red; left: 0px; top: 0px;}\n    25% {background-color: orange; left: 200px; top: 0px;}\n    50% {background-color: green; left: 200px; top: 200px;}\n    75% {background-color: blue; left: 0px; top: 200px;}\n    100% {background-color: red; left: 0px; top: 0px;}\n}\n</style>\n</head>\n<body>\n<h1>Animation</h1>\n<div></div>\n<p><b>note:</b>When an animation is finished, it goes back to its original style:</p>\n</body>\n</html>",
		external_css: "",
		external_js: "",
	},
	{
		id: 6,
		program_name: "HTML5 Layout",
		focused_on: "HTML5 Layout",
		code: '<html>\n<head>\n<title>HTML5 Layout Example</title>\n<style>\nbody {\n    font-family: Arial;\n    margin: 0;\n    padding: 0;\n}\nheader {\n    background-color: #333;\n    color: #fff;\n    padding: 10px;\n    text-align: center;\n}\nnav {\n    background-color: #555;\n    color: #fff;\n    padding: 10px;\n    text-align: center;\n}\nsection {\n    padding: 20px;\n}\narticle {\n    margin-bottom: 20px;\n}\nfooter {\n    background-color: #333;\n    color: #fff;\n    padding: 10px;\n    text-align: center;\n}\n</style>\n</head>\n<body>\n<header>\n    <h1>Header</h1>\n</header>\n<nav>\n    <ul>\n        <li><a href="#">Home</a></li>\n        <li><a href="#">About</a></li>\n        <li><a href="#">Services</a></li>\n        <li><a href="#">Contact</a></li>\n    </ul>\n</nav>\n<section>\n    <article>\n        <h2>Article 1</h2>\n        <p>This is the content of Article 1.</p>\n    </article>\n    <article>\n        <h2>Article 2</h2>\n        <p>This is the content of Article 2.</p>\n    </article>\n</section>\n<footer>\n    <p>Footer</p>\n</footer>\n</body>\n</html>',
		external_css: "",
		external_js: "",
	},
	{
		id: 7,
		program_name: "JavaScript Squares and Cubes",
		focused_on: "JavaScript",
		code: '<html>\n<head><title>Squares & Cubes</title></head>\n<body>\n<center>\n<table border="1">\n<tr><th>number</th><th>square</th><th>cube</th></tr>\n<script>\nfor (var i = 0; i <= 10; i++)\n    document.write("<tr><td>" + i + "</td><td>" + i * i + "</td><td>" + i * i * i + "</td></tr>");\n</script>\n</table>\n</center>\n</body>\n</html>',
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
	return programs.find((program) => program.id === Number(id));
};
