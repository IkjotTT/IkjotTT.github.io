function promptForName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("name").innerHTML = "Hello, " + name + "!";
        document.getElementById("nameButton").style.display = "none";
    }
}

function navigateToPage(page) {
    document.getElementById("content").innerHTML = "<h2>You clicked on " + page + "</h2>";
}


function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
