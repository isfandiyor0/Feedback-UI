const ratingsElements = document.querySelectorAll(".rating");
const btnElement = document.getElementById("btn");
const containerElement = document.getElementById("container");

let selectedRating = "";

ratingsElements.forEach((ratingsElements) => {
	ratingsElements.addEventListener("click", (event) => {
		removeActiveClass();
		selectedRating = event.target.innerText || event.target.parentNode.innerText;
		event.target.classList.add("active");
		event.target.parentNode.classList.add("active");
	});
});

// BTN
btnElement.addEventListener("click", ()=> {
	if(selectedRating !== ""){
		containerElement.innerHTML = `
		<strong>Thank you!</strong>
		<br><br>
		<strong>Feeadback: ${selectedRating}</strong>
		<p>We'll use your feedback to improve our customer support.</P>
		`
	}
})

// remove class
function removeActiveClass() {
	ratingsElements.forEach((ratingsElements) => {
		ratingsElements.classList.remove("active");
	});
}