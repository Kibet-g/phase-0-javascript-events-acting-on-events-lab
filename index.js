// Your code here
// Grab the dodger element
const dodger = document.getElementById("dodger");

// Move the dodger to the left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Check if dodger is not at the left edge of the game field
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Move the dodger to the right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Check if dodger is not at the right edge of the game field
  if (left < 360) { // 400px (game width) - 40px (dodger width)
    dodger.style.left = `${left + 1}px`;
  }
}

// Add event listener for keydown events
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
