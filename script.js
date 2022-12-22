const ratingButtons = document.querySelectorAll(".rate-button");
console.log(ratingButtons);

function selectRating() {
  event.preventDefault();
  for (let i = 0; i < ratingButtons.length; i++) {
    if (ratingButtons[i].classList.contains("rating-selected")) {
      ratingButtons[i].classList.remove("rating-selected");
      ratingButtons[i].classList.add("rate-button-inactive");
    }
  }
  this.classList.add("rating-selected");
  this.classList.remove("rate-button-inactive");
}

for (let i = 0; i < ratingButtons.length; i++) {
  console.log(ratingButtons[i]);
  ratingButtons[i].addEventListener("click", selectRating);
}