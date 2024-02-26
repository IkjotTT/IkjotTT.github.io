function promptForName() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("name").innerHTML = "Hello, " + name + "!";
        document.getElementById("nameButton").style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', function() {
        this.querySelector('.dropdown-menu').style.display = 'block';
      });
  
      dropdown.addEventListener('mouseleave', function() {
        this.querySelector('.dropdown-menu').style.display = 'none';
      });
    });
  });
  