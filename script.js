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
const setTheme = theme => document.documentElement.className = theme;