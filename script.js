document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("click-me-button");
    var select = document.getElementById("language-select");
  
    // Event listener for button click
    button.addEventListener("click", function() {
      alert("You clicked me!");
    });
  
    // Event listener for language change
    select.addEventListener("change", function() {
      var selectedValue = select.value;
  
      // Change button text based on selected language
      if (selectedValue === "en") {
        button.textContent = "Lanto Time";
      } else if (selectedValue === "te") {
        button.textContent = "Mai Ita Lanto";
      }
      
      }
    });
  });
  