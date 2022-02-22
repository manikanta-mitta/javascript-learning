function change() {
    document.getElementById("para").innerHTML="After click of a button";
}
function display() {
    let element = document.getElementById("input");
    document.getElementById("para2").textContent = "Entered text :" + " " + element.value;
}