const buttons = document.querySelectorAll(".progress__btn");
const progressBar = document.querySelector("#progress-bar");
const circles = document.querySelectorAll(".progress__circle");
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");

let currentCircle = 1;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "next") {
      currentCircle++;
      btnPrev.disabled = false;
      if (currentCircle >= circles.length) {
        currentCircle = circles.length;
        btnNext.disabled = true;
      }
      progress();
    } else if (button.id == "prev") {
      currentCircle--;
      btnNext.disabled = false;
      if (currentCircle == 1) {
        currentCircle = 1;
        btnPrev.disabled = true;
      }
      progress();
    }
  });
});

progress = () => {
  console.log("hey", currentCircle);
  progressBar.style.width =
    ((currentCircle - 1) / (circles.length - 1)) * 100 + "%";
  console.log((currentCircle - 1) / (circles.length - 1)) * 100;
  circles.forEach((circle, id) => {
    if (currentCircle - 1 >= id) {
      circle.classList.add("progress__circle--active");
    } else {
      circle.classList.remove("progress__circle--active");
    }
  });
};
