// this is a function used to prompt the user for their name, the name is stored into name otherwise if nothing is entered, it is automatically set to guest 
function promptName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("name").innerHTML = "Hello, " + name + "!";
        document.getElementById("nameButton").style.display = "none";
    }
    else {
        outputElement.innerHTML = "Hello, guest!";
     }
}

var image = document.getElementById("myImage");
image.addEventListener("click", function() {
    if (image.width == 100) {
        image.width = 400;
    } else {
        image.width = 100;
    }
});