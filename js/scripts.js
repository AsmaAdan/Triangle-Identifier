function triangleIdentifier() {
  var base1 = document.getElementById("base").value;
  var height1 = document.getElementById("height").value;
  var length1 = document.getElementById("length").value;

  var base = parseInt(base1);
  var height = parseInt(height1);
  var length = parseInt(length1);

  var typesOfTriangles = ["Equilateral triangle", "Isosceles triangle", "Scalene triangle"];
  var output = document.getElementById("output")

  if (base + height < length || base +length < height || length + height < base){
  document.getElementById("output").innerHTML="Not a triangle";
}
  else if (base <= 0|| height <= 0|| length <= 0) {
	document.getElementById("output").innerHTML="Not a triangle"; //* Meant to reject detect a zero or a negative value
}
  else if (height == base && base == length && height == length) {
	   document.getElementById("output").innerHTML=typesOfTriangles[0]; //* Meant to detect if it an Equilateral triangle
 }
  else if ( height == base || height == length || length == base ) {
	   document.getElementById("output").innerHTML= typesOfTriangles[1]; //* Meant to detect if it is an Isosceles triangle
}
  else if (height!=base || base!=length || length!=heigh && base + height > length || base +length > height || length + height > base) {
	   document.getElementById("output").innerHTML=typesOfTriangles[2]; //* Meant to detect if it is a scalene triangle
}
  else {
	   document.getElementById("output").innerHTML="Another type of triangle, requires Angle input";
}
}
