console.clear();

const body = document.querySelector("body");
const toogleButton = document.querySelector('[data-js="dark-mode-toggle"]');

toogleButton.addEventListener("click", () => {
  toogleButton.classList.toggle("active");
});
