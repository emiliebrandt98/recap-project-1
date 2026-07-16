console.clear();

const form = document.querySelector('[data-js="form"]');

// Submit-Button
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.target.reset();
  event.target.elements.inputQuestion.focus();
});

// Remaining Characters
const maxLength = questionInput.maxLength;

// Questions
const remainingCharactersQuestion = document.querySelector(
  '[data-js="remaining-characters-questions"]',
);
const questionInput = document.querySelector('[data-js="input-question"]');
questionInput.addEventListener("input", (event) => {
  remainingCharactersQuestion.textContent =
    maxLength - event.target.value.length;
});

// Answer
const remainingCharactersAnswers = document.querySelector(
  '[data-js="remaining-characters-answers"]',
);
const answerInput = document.querySelector('[data-js="input-answer"]');
answerInput.addEventListener("input", (event) => {
  remainingCharactersAnswers.textContent =
    maxLength - event.target.value.length;
});
