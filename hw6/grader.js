// PRINTING FUNCTIONS
function ln(line) {
	document.writeln(line + "<br>");
}

function lnbreak() {
	document.writeln("<br>");
}

// GRADE EXERCISE 1
function gradeExercise1() {
	ln("START GRADING EXERCISE 1");
	lnbreak();
	ln("Testing ADD: The output for this function should be 358: " + add(217, 141));
	ln("Testing ADD: The output for this function should be 676: " + add(-72, 748));
	ln("Testing ADD: The output for this function should be 918: " + add(918, 0));
	lnbreak();
	ln("Testing SUBTRACT: The output for this function should be 76: " + subtract(217, 141));
	ln("Testing SUBTRACT: The output for this function should be -820: " + subtract(-72, 748));
	ln("Testing SUBTRACT: The output for this function should be 884: " + subtract(918, 34));
	lnbreak();
	ln("Testing MULTIPLY: The output for this function should be 30597: " + multiply(217, 141));
	ln("Testing MULTIPLY: The output for this function should be -53856: " + multiply(-72, 748));
	ln("Testing MULTIPLY: The output for this function should be 31212: " + multiply(918, 34));
	lnbreak();
	ln("Testing DIVIDE: The output for this function should be 0.42: " + divide(42, 100));
	ln("Testing DIVIDE: The output for this function should be 0.48148148148148145: " + divide(13, 27));
	ln("Testing DIVIDE: The output for this function should be Infinity: " + divide(10, 0));
	lnbreak();
}

// GRADE EXERCISE 2
function gradeExercise2() {
	ln("START GRADING EXERCISE 2");
	lnbreak();
	ln("Testing sarahTA: The output for this function should be WDD Only!: " + sarahTA(100));
	ln("Testing sarahTA: The output for this function should be WDD and CS61B!: " + sarahTA(5));
	lnbreak();
}

// GRADE EXERCISE 3
function gradeExercise3() {
	ln("START GRADING EXERCISE 3");
	lnbreak();
	ln("Testing shawnsDream: The output for this function should be Shawn Park! Shawn Park! Shawn Park!: " + shawnsDream());
	lnbreak();
}

// GRADE EXERCISE 4
function gradeExercise4() {
	ln("START GRADING EXERCISE 4");
	lnbreak();
	ln("Testing philSax: The output for this function should be It's Monday :(: " + philSax("Monday"));
	ln("Testing philSax: The output for this function should be Bass: " + philSax("Wednesday"));
	ln("Testing philSax: The output for this function should be Soprano: " + philSax("Saturday"));
	ln("Testing philSax: The output for this function should be Alto: " + philSax("Tuesday"));
	lnbreak();
}

// GRADE EXERCISE 5
function gradeExercise5() {
	ln("START GRADING EXERCISE 5");
	lnbreak();
	ln("Testing joinNames: The output for this function should be Andy, Hamza, and Adam.: " + joinNames("Andy", "Hamza", "Adam"));
	lnbreak();
}

// GRADE HW6
gradeExercise1();
gradeExercise2();
gradeExercise3();
gradeExercise4();
gradeExercise5();
