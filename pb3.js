// pb-1
var x=13;
var y=79;
var z=45;
 if (x>y) {
    console.log('x');
 } else if (y>x) {
    console.log('y');
 } else if(z>x && z>y ) {
    console.log('z');
 } 
 else{
    console.log(0);
 }

//  pb2

var ab=8;
var bc=9;
var ca=9;

if (ab==bc || bc==ca || ca==ab ) {
    console.log("triangle is Isosceles");
} else {
    console.log("triangle is not Isosceles"); 
}