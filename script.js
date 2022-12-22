const ratingButtons = document.querySelectorAll(".rate-button");
const submitButton = document.querySelector("#submit-button");
const ratingComponent = document.querySelector(".rating-component-container");
const submittedBox = document.querySelector(".submitted-box");
const scores = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5}
let selected = false

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
  rating = scores[this.id]
  selected = true
}

function submitRating() {
    event.preventDefault();
    if (selected == true) {
        console.log("Submit rating of " + rating)
        ratingComponent.style.display = "none";
        submittedBox.style.display = "block";
        document.getElementById("rating").innerHTML = ` You selected ${rating} out of 5`;
    }
}

for (let i = 0; i < ratingButtons.length; i++) {
  ratingButtons[i].addEventListener("click", selectRating);
}

submitButton.addEventListener("click", submitRating)