let input = document.querySelector(".inputScreen");
let buttonInput = document.querySelectorAll("button");
let string = "";

let arr = Array.from(buttonInput);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.id == "=") {
      string = eval(string);
      input.value = string;
    } else if (button.id == "AC") {
      string = "";
      input.value = string;
    } else if (button.id == "C") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (button.id == "+/-") {
      if (string.charAt(0) === "-") {
        string = string.slice(1);
      } else {
        string = `-${string}`;
      }
      input.value = string;
    } else {
      string += button.id;
      input.value = string;
    }
  });
});
