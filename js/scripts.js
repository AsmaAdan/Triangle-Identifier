var typesOfTriangles = ["Equilateral triangle", "Isosceles triangle", "Scalene triangle"];
function triangleIdentifier (base, height, length) {
	base = parseInt(prompt("Enter your base"));
 	height = parseInt(prompt("Enter your height"));
	length = parseInt(prompt("Enter your length"));

if (base <= 0|| height <= 0|| length <= 0) {
	alert("Not a triangle"); //* Meant to reject detect a zero or a negative value
}
else if (height == base && base == length) {
	alert(typesOfTriangles[0]); //* Meant to detect if it an Equilateral triangle
 }
else if ( height == base || height == length) {
	alert(typesOfTriangles[1]); //* Meant to detect if it is an Isosceles triangle
}
else if (height!=base || base!=length) {
	alert(typesOfTriangles[2]); //* Meant to detect if it is a scalene triangle
}
else {
	alert("Another type of triangle, requires angle input")
}
}
triangleIdentifier();
