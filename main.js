function promptForName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("name").innerHTML = "Hello, " + name + "!";
        document.getElementById("nameButton").style.display = "none";
    }
}

function toggleMenu() {
    var menu = document.getElementById("navigationMenu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}


function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
