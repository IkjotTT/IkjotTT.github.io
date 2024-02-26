function promptForName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("name").innerHTML = "Hello, " + name + "!";
        document.getElementById("nameButton").style.display = "none";
    }
}

// Task a: Create a button that prompts the user to type their name and display it in an HTML element

function promptForName() {
    var name = prompt("Please enter your name:");
    var outputElement = document.getElementById("nameOutput");
    if (name !== null && name !== "") {
        outputElement.innerHTML = "Hello, " + name + "!";
    } else {
        outputElement.innerHTML = "Hello, guest!";
    }
}

// Task b: Make a clickable image that enlarges when clicked

function enlargeImage() {
    var image = document.getElementById("myImage");
    image.style.width = "200px"; // adjust the width as desired
}

// Task c: Create a customized navigation menu

function toggleMenu() {
    var menu = document.getElementById("menuItems");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Task d: Add onmouseover/onmouseout events for navigation items

function highlightItem(item) {
    item.style.backgroundColor = "lightgray";
}

function unhighlightItem(item) {
    item.style.backgroundColor = "";
}
