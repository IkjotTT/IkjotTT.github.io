//function that provides the ability to clear the form using the clear button
function clearForm(){
    document.getElementById('Form').reset();
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("Form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const formData = new FormData(form);
        const formObject = {};
        formData.forEach(function(value, key){
            formObject[key] = value;

        });

        localStorage.setItem("contactFormData", JSON.stringify(formObject));

        //alerts the user that the form was submitted successfully
        alert("Contact From Submitted Successfully!");
        document.getElementById("contactForm").reset();
    
    });
});


//this allows to change the contrast between default and high contrast
const setTheme = theme => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme); //makes it to where the theme is saved
};

//code that enables the contrast to stay the same when going to a different page of the site
const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  };

//this allows for the loading of the theme upon the page being loaded
window.addEventListener('DOMContentLoaded', loadTheme);


//code that enables keyboard shortcut use on the website for navigating to different pages
document.addEventListener('keydown', function(event) {
    // Checking if CTRL key is pressed along with the specified numbered key
    if (event.ctrlKey && event.key === '1') {
        //CTRL+1 is pressed to go to the homepage
        window.location.href = 'index.html';
    } else if (event.ctrlKey && event.key === '2') {
        //CTRL+1 is pressed to go to the about page
        window.location.href = 'about.html';
    } else if (event.ctrlKey && event.key === '3') {
        //CTRL+1 is pressed to go to the experience page
        window.location.href = 'experience.html';
    } else if (event.ctrlKey && event.key === '4') {
        //CTRL+1 is pressed to go to the FAQs page
        window.location.href = 'FAQs.html';
    } else if (event.ctrlKey && event.key === '5') {
        //CTRL+1 is pressed to go to the contact page
        window.location.href = 'contact.html';
    }
});