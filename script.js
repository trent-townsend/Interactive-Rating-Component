const ratingButtons = document.querySelectorAll(".rate-button");
console.log(ratingButtons);
const scores = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5}

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
  let rating = scores[this.id]
}

for (let i = 0; i < ratingButtons.length; i++) {
  console.log(ratingButtons[i]);
  ratingButtons[i].addEventListener("click", selectRating);
}