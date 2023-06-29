function clicked(e) {
  if (!confirm("Thank you for your feedback.You'll hear back soon!")) {
    e.preventDefault();
  }
}

// document
//   .getElementById("contactForm").addEventListener("submit", function clicked(event) {
//     event.preventDefault(); // Prevent form submission

//     // Display pop-up message
//     alert("Thank you for your feedback. You'll hear back soon!");

//     // Clear form fields
//     this.reset();
//   });
