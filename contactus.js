function clicked(event) {
  if (!confirm("Thank you for your feedback.You'll hear back soon!")) {
    event.preventDefault();
  }
}