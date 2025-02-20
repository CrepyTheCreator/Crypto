document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("transaction");
  const minusBtn = document.getElementById("trans-minus");
  const plusBtn = document.getElementById("trans-plus");

  minusBtn.addEventListener("click", function () {
      let value = parseInt(input.value, 10);
      if (!isNaN(value)) {
          input.value = value - 1;
      }
  });

  plusBtn.addEventListener("click", function () {
      let value = parseInt(input.value, 10);
      if (!isNaN(value)) {
          input.value = value + 1;
      }
  });
});


//удаление контента в инпутах
document.querySelectorAll(".input-content").forEach(container => {
  const input = container.querySelector("input");
  const clearButton = container.querySelector(".clear-button");

  // Показывать кнопку, если в инпуте есть текст
  input.addEventListener("input", () => {
      clearButton.style.display = input.value ? "block" : "none";
  });

  clearButton.addEventListener("click", () => {
      input.value = "";
      clearButton.style.display = "none";
      input.focus();
  });
});
