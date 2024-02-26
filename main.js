// this is a function used to prompt the user for their name, the name is stored into name variable and then displayed on screen on homepage
function promptName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("name").innerHTML = "Hello, " + name + "!";
        document.getElementById("nameButton").style.display = "none";
    }
}

function enlargeImage(img) { // a function that takes in the image, it then changes the size of the image based on the CSS styling code (increases it size while also having a slow transition)
    img.classList.toggle('enlarged');
}

// A function that adds a shadowy effect when the user hovers off the specific dropdown menu item
function addShadow(element) {
    element.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
}

// A function to darken background color with a tone of grey to make it seem that the user has already hovered/seen this element
function darkenBackground(element) {
    element.classList.add('mouseout-dark');

}
