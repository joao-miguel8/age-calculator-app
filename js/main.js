const dayInput = document.querySelector(".day-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const buttonOutput = document.querySelector(".output-bttn");
const buttonContainer = document.querySelector(".output-button-container");
const yearsOutput = document.querySelector(".years-output");
const monthsOutput = document.querySelector(".months-output");
const daysOutput = document.querySelector(".days-output");

buttonOutput.addEventListener("click", getUsersDates);

// Function to get users inputs chosen and display it
function getUsersDates() {
    let monthChosen = +monthInput.value;
    monthsOutput.textContent = monthChosen;
    let dayChosen = +dayInput.value;
    daysOutput.textContent = dayChosen;
    let yearChosen = +yearInput.value;
    yearsOutput.textContent = yearChosen;
}
