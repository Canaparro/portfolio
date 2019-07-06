let aboutKnowledgeButton = document.querySelector(".about-button.button-left");
let aboutCarrerButton = document.querySelector(".about-button.button-right");

aboutKnowledgeButton.addEventListener("click", function() {
  document.querySelector("#knowledge").classList.add("visible");
  document.querySelector("#carrer").classList.remove("visible");
  this.classList.add("active");
  document
    .querySelector(".about-button.button-right")
    .classList.remove("active");
});

aboutCarrerButton.addEventListener("click", function() {
  document.querySelector("#knowledge").classList.remove("visible");
  document.querySelector("#carrer").classList.add("visible");
  this.classList.add("active");
  document
    .querySelector(".about-button.button-left")
    .classList.remove("active");
});
