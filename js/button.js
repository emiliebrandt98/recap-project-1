console.clear();

const toogleButton = document.querySelector('[data-js="answerButton"]');
const answer = document.querySelector('[data-js="answer"]');

toogleButton.addEventListener("click", () => {
  const isActive = answer.classList.toggle("quiz-card__answer--active")
    ? "Hide Answer"
    : "Show Answer";

  toogleButton.textContent = isActive;
});

console.log(toogleButton);
