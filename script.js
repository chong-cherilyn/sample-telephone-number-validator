/// Web application to check whether a number entered is a valid United States telephone number

// Declare variables
const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const areaCode = "1";

// Telephone number validator
function numberValidator() {

  if (
    userInput.value === ""
  ) {

    // Display error message if check button clicked without entering a number
    alert("Please provide a phone number");

  } else if (
    userInput.value.startsWith("-") ||
    userInput.value.startsWith("+") ||
    userInput.value.includes("?") ||
    userInput.value.includes("*")
  ) {

    // Display text to confirm an invalid result for number starting with a minus or plus
    result.innerText = `Invalid US number: ${userInput.value}`;
    result.setAttribute("display", "hidden");

  } else {

    // Remove special characters from input value to check everything after the area code
    let checkNumber = userInput.value.replace(/[^0-9]/g, "");

    if (
      userInput.value.startsWith(areaCode) &&
      (
        userInput.value.charAt(1) === " " && userInput.value.charAt(5) === " " ||
        userInput.value.charAt(1) === " " && userInput.value.charAt(5) === "-" ||
        userInput.value.charAt(1) === "(" && userInput.value.charAt(5) === ")" ||
        userInput.value.charAt(1) === "-" && userInput.value.charAt(5) === "-" ||
        userInput.value.charAt(2) === " " && userInput.value.charAt(6) === " " ||
        userInput.value.charAt(2) === " " && userInput.value.charAt(6) === "-" ||
        userInput.value.charAt(2) === "(" && userInput.value.charAt(6) === ")" ||
        userInput.value.charAt(2) === "-" && userInput.value.charAt(6) === "-" ||
        userInput.value === checkNumber
      ) &&
      checkNumber.length === 11
    ) {

      // Check numbers with area codes

      // Display text to confirm a valid result if the number is the correct length and has spaces, brackets or dashes where permitted
      result.innerText = `Valid US number: ${userInput.value}`;
      result.setAttribute("display", "hidden");

    } else if (
      (
        userInput.value.charAt(0) === "(" && userInput.value.charAt(4) === ")" ||
        userInput.value.charAt(3) === " " ||
        userInput.value.charAt(3) === "-" ||
        userInput.value === checkNumber
      ) &&
      checkNumber.length === 10
    ) {

      // Check numbers without area codes

      // Display text to confirm a valid result if the number is the correct length and has spaces, brackets or dashes where permitted
      result.innerText = `Valid US number: ${userInput.value}`;
      result.setAttribute("display", "hidden");

    } else {

      // Display text to confirm an invalid result
      result.innerText = `Invalid US number: ${userInput.value}`;
      result.setAttribute("display", "hidden");

    }
  }
};

// Trigger the number validator upon clicking the Check button
checkButton.addEventListener("click", numberValidator);

// Trigger clearing all values upon clicking the Clear button
clearButton.addEventListener("click", (event) => {
  if (event) {
    userInput.value = "";
    result.innerText = "";
    result.setAttribute("display", "hidden");
  }
});

// Recognise and provide keypresses to the number validator
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    numberValidator();
  }
});

addEventListener("input", () => {
  result.innerText = "";
  result.setAttribute("display", "hidden");
});