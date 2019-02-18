function triangleIdentifier() {
	var base1 = document.getElementById("base").value;
	var height1 = document.getElementById("height").value;
	var length1 = document.getElementById("length").value;
	var base = parseInt(base1);
	var height = parseInt(height1);
	var length = parseInt(length1);
	var typesOfTriangles = ["Equilateral triangle", "Isosceles triangle", "Scalene triangle"];
	var output = document.getElementById("output")
	if (base <= 0 || height <= 0 || length <= 0) {
		document.getElementById("output").innerHTML = "These values can't make a triangle"; //* Meant to reject detect a zero or a negative value
	} else if (base + height < length || base + length < height || length + height < base) {
		document.getElementById("output").innerHTML = "These values don't make a triangle"; //* Meant to reject values which may not make a triangle
	} else if (height == base && base == length && height == length) {
		document.getElementById("output").innerHTML = "This is an " + typesOfTriangles[0] + " (center image)"; //* Meant to detect if it an Equilateral triangle
	} else if (height == base || height == length || length == base) {
		document.getElementById("output").innerHTML = "This is an " + typesOfTriangles[1] + " (image on the left)"; //* Meant to detect if it is an Isosceles triangle
	} else if (height != base || base != length || length != heigh && base + height > length || base + length > height || length + height > base) {
		document.getElementById("output").innerHTML = "This is a " + typesOfTriangles[2] + " (image on the right)"; //* Meant to detect if it is a scalene triangle
	} else {
		document.getElementById("output").innerHTML = "Another type of triangle, requires Angle input";
	}
}

function myFunction() {
	document.getElementById("myForm").reset();
	document.getElementById("output").innerHTML = "Identity = ?";
}
