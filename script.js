// script.js

// Example: Play a sound when a veggie is clicked
document.addEventListener("DOMContentLoaded", () => {
  const veggie = document.getElementById("carrot");

  if (veggie) {
    veggie.addEventListner("click", () => {
      alert("carrot clicked! Carrot Sound will play here in the future.");
   // Sound feature coming sson!
    });
  }
});                          
