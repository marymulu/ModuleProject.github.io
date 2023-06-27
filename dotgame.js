
// Get all the dot elements
const dots = document.getElementsByClassName("dot");

// Add click event listener to each dot
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    const dotId = dots[i].id;
    const [row, column] = dotId.split("-").slice(1); // Extract row and column from dotId

    // Highlight dots in the same row
    const dotsInRow = document.getElementsByClassName(`dot-${row}`);
    for (let j = 0; j < dotsInRow.length; j++) {
      dotsInRow[j].classList.add("highlighted");
    }
  });
}