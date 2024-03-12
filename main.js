function promptName() { // this is a function used to prompt the user for their name, the name is stored into name variable and then displayed on screen on homepage
    var name = prompt("Please enter your name:"); // prompts the user to input name
    if (name != null && name != "") { //checks to see if input is blank or null
        document.getElementById("name").innerHTML = "Hello, " + name + "!"; //if true it will display a hello message with the name of the individual
        document.getElementById("nameButton").style.display = "none"; //removes the button to input name 
    }
}

function enlargeImage(img) { // a function that takes in the image, it then changes the size of the image based on the CSS styling code (increases it size while also having a slow transition)
    img.classList.toggle('enlarged'); //toggles the enlarged class 
}


function Shadow(element) { //this function takes a parameter and then applies a shadowy effect to 
    element.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
}

function darkBack(element) { //function takes in a parameter as well as applies a darkened background color after the user has moved the mouse off the navigation element
    element.classList.add('mouseout-dark');

}

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    storeFormData();
});

function storeFormData() {
    const formData = {};
    const form = document.getElementById('myForm');
    
    formData.name = form.name.value;
    formData.email = form.email.value;
    formData.gender = form.gender.value;
    
    formData.interests = [];
    form.querySelectorAll('input[name="interest"]:checked').forEach(function(checkbox) {
        formData.interests.push(checkbox.value);
    });
    
    formData.message = form.message.value;
    
    localStorage.setItem('formData', JSON.stringify(formData));
    
    alert('Form data submitted successfully!');
    form.reset();
}

function clearForm() {
    localStorage.removeItem('formData');
    document.getElementById('myForm').reset();
}