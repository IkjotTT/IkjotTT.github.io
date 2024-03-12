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

//this is code pertaining to Lab 6: Forms
//this is an event listener, waits for HTML page to initialize
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("Form");

  //event listener for when the form is submitted while also preventing the submission of a default form
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    //code that gets the data entered in the form
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach(function(value, key){
      formObject[key] = value;
    });

    //Store the gathered form data into the local storage
    localStorage.setItem("contactFormData", JSON.stringify(formObject));

    //An alert that prompts the user that submission was successful 
    alert("Contact Form Submitted!");
  });
});

  //A Function to clear form 
  function clearForm() {
    document.getElementById('Form').reset(); //resets the form enteries
  }
  
