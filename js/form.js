console.clear();

const form = document.querySelector('[data-js="form"]');
const questionContainer = document.querySelector(
  '[data-js="question-container"]',
);

// ------------------Submit-Button------------------
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  // ------------------Question-Container------------------
  const card = document.createElement("article");
  const cardQuestion = document.createElement("h2");
  const cardButton = document.createElement("button");
  const cardAnswer = document.createElement("p");
  const cardTag = document.createElement("p");
  const cardBookmark = document.createElement("button");
  const bookmarkImage = document.createElement("img");

  questionContainer.classList.add("card");
  card.classList.add("quiz-card");
  cardQuestion.classList.add("h2");
  cardButton.classList.add("quiz-card--button");
  cardAnswer.classList.add("quiz-card__answer", "quiz-card__answer--active");
  cardTag.classList.add("quiz-card–tags");
  cardBookmark.classList.add("quiz-card--bookmark-btn");
  bookmarkImage.classList.add("quiz-card--bookmark");

  cardQuestion.textContent = event.target.elements.inputQuestion.value;
  cardButton.textContent = "Hide Answer";
  cardAnswer.textContent = event.target.elements.inputAnswer.value;
  cardTag.textContent = event.target.elements.inputTag.value;

  questionContainer.prepend(card);
  card.append(cardQuestion);
  card.append(cardButton);
  card.append(cardAnswer);
  card.append(cardTag);
  card.append(cardBookmark);
  cardBookmark.append(bookmarkImage);
  bookmarkImage.setAttribute("src", "./assets/bookmark.png");
  bookmarkImage.setAttribute("alt", "");

  // ------------------Button Feedback------------------

  cardButton.addEventListener("click", () => {
    const answerButtonActive = cardAnswer.classList.toggle(
      "quiz-card__answer--active",
    )
      ? "Hide Answer"
      : "Show Answer";

    cardButton.textContent = answerButtonActive;
  });

  cardBookmark.addEventListener("click", () => {
    const bookmarkButtonActive = bookmarkImage.classList.toggle(
      "quiz-card--bookmark--active",
    );

    if (bookmarkButtonActive) {
      bookmarkImage.setAttribute("src", "./assets/bookmark-active.png");
    } else {
      bookmarkImage.setAttribute("src", "./assets/bookmark.png");
    }
  });

  // ------------------Remaining Characters------------------
  const remainingCharactersQuestion = document.querySelector(
    '[data-js="characters-questions"]',
  );
  const questionInput = document.querySelector('[data-js="input-question"]');
  const remainingCharactersAnswers = document.querySelector(
    '[data-js="characters-answers"]',
  );
  const answerInput = document.querySelector('[data-js="input-answer"]');

  function characterCounter(input, counter) {
    input.addEventListener("input", (event) => {
      counter.textContent = maxLength - event.target.value.length;
    });
  }

  const maxLength = questionInput.maxLength;

  characterCounter(questionInput, remainingCharactersQuestion);
  characterCounter(answerInput, remainingCharactersAnswers);

  event.target.reset();
  event.target.elements.inputQuestion.focus();
});
