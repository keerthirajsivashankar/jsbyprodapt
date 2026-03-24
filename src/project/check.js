const textInput = document.getElementById("text");
const textPattern = /^[a-zA-Z0-9]+$/;
const feedback = document.getElementById("feedback");

function check() {
  const text = textInput.value;

  if (textPattern.test(text)) {
    feedback.textContent = "Input is valid.";
    feedback.style.color = "green";
  } else {
    feedback.textContent =
      "Input is invalid. Please enter only letters and numbers.";
    feedback.style.color = "red";
  }
}
