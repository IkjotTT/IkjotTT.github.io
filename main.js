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



function storeFormData(event) {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(event.target); // Get form data
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    localStorage.setItem('formData', JSON.stringify(data)); // Store data in local storage
  }
  
  // Function to clear form fields
  function clearForm() {
    document.getElementById('contactForm').reset(); // Reset form fields
    localStorage.removeItem('formData'); // Remove data from local storage
  }
  
  // Check if there's stored form data on page load
  window.onload = function() {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const data = JSON.parse(storedData);
      document.getElementById('name').value = data.name || '';
      document.getElementById('email').value = data.email || '';
      document.getElementById('message').value = data.message || '';
      document.querySelector(`input[name="gender"][value="${data.gender || ''}"]`).checked = true;
      const interests = data.interests || [];
      interests.forEach(interest => {
        document.querySelector(`input[name="interests"][value="${interest}"]`).checked = true;
      });
    }
  };
  
  // Add event listener for form submission
  document.getElementById('contactForm').addEventListener('submit', storeFormData);