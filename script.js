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

        alert("Contact From Submitted Successfully!");

        document.getElementById("contactForm").reset();
    
    });
});

const setTheme = theme => document.documentElement.className = theme;