function myBold() {
document.getElementById("Mytext").style.fontWeight = "bold";
}
function myPX() {
var val= document.getElementById("selectPX").value;
document.getElementById("Mytext").style.fontSize= val;
}
function myFontFamily() {
var val= document.getElementById("selectFont").value;
document.getElementById("Mytext").style.fontFamily= val;
}

function myItalic() {
document.getElementById("Mytext").style.fontStyle = "italic";
}
function myUnderline() {
document.getElementById("Mytext").style.textDecoration = "underline";
}