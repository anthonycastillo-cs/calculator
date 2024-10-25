function addNumber(num, num1) {
  return num + num1;
}
function subtractNumber(num, num1) {
  return num - num1;
}
function multiplyNumber(num, num1) {
  return num * num1;
}
function divideNumber(num, num1) {
  return num / num1;
}
const empty = (element) => {
  element.innerText = "";
};
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    if (buttonText === "C") {
      screen.value = "";
    } else if (buttonText === "=") {
      try {
        screen.value = eval(screen.value);
      } catch (error) {
        screen.value = "Error";
      }
    } else {
      screen.value += buttonText;
    }
  });
});
