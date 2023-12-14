// Creating 2 variables for the container && text
const container = document.getElementById("container");
const text = document.getElementById("text");

// The 4-7-8 breathing Functionality
const totalTime = 19000;
const breatheTime = 5000;
const holdTime = 6000;

// Declaring the breathing animation
function breatheAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime);

// Init
breatheAnimation();
