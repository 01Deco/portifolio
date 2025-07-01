const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Erro";
      }
    } else if (value === "C") {
      display.value = "";
    } else {
      display.value += value;
    }
  });
});
