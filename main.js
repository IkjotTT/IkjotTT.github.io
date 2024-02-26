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

function enlargeImage(img) { // a function that takes in the image, it togglest the class englarged which contains image resizing code
    img.classList.toggle('enlarged');
}

