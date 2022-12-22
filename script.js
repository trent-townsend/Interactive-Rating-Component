const rate_One = document.querySelector("#one");
const rate_Two = document.querySelector("#two");
const rate_Three = document.querySelector("#three");
let ratingSelected = false

rate_One.onclick = (event) => {
    let rating = 1;
    rate_One.classList.add("rating-selected");
    rate_One.classList.remove("rate-button-inactive");
    let ratingSelected = true;
    console.log(ratingSelected)
};

