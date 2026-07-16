console.clear();

// Answer-Toggle-Button
const toogleButton = document.querySelector('[data-js="answerButton"]');
const answer = document.querySelector('[data-js="answer"]');

toogleButton.addEventListener("click", () => {
  const answerButtonActive = answer.classList.toggle(
    "quiz-card__answer--active",
  )
    ? "Hide Answer"
    : "Show Answer";

  toogleButton.textContent = answerButtonActive;
});

//Bookmark-Toogle-Button
const toogleBookmarkButton = document.querySelector(
  '[data-js="bookmarkButton"]',
);
const bookmarkImage = document.querySelector('[data-js="bookmarkImageActive"]');

toogleBookmarkButton.addEventListener("click", () => {
  const bookmarkButtonActive = bookmarkImage.classList.toggle(
    "quiz-card--bookmark--active",
  );

  if (bookmarkButtonActive) {
    bookmarkImage.setAttribute("src", "./assets/bookmark-active.png");
  } else {
    bookmarkImage.setAttribute("src", "./assets/bookmark.png");
  }
});
