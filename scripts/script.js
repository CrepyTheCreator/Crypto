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

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".dropdown-btn");
  const menu = document.querySelector(".dropdown-menu");
  const dropdownIcon = document.querySelector(".drop-svg"); // Получаем элемент иконки

  button.addEventListener("click", function () {
    const isOpen = menu.style.display === "block";
    menu.style.display = isOpen ? "none" : "block";
    
    // Добавляем или убираем класс drop-svg-open
    dropdownIcon.classList.toggle("drop-svg-open", !isOpen);
  });

  document.addEventListener("click", function (event) {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
      menu.style.display = "none";
      dropdownIcon.classList.remove("drop-svg-open"); // Убираем класс при закрытии
    }
  });

  menu.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      button.textContent = event.target.textContent;
      menu.style.display = "none";
      dropdownIcon.classList.remove("drop-svg-open"); // Убираем класс при закрытии
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuPhoneBtn = document.getElementById("menu-phone");
  const menuListBtns = document.querySelectorAll(".close-menu"); // массив элементов
  const menuList = document.querySelector(".menu-list");
  const menuListBack = document.querySelector(".menu-list-back");

  function toggleMenu() {
      menuList.classList.toggle("menu-list-open");
      menuListBack.classList.toggle("menu-list-back-active");
  }

  function closeMenu() {
      menuList.classList.remove("menu-list-open");
      menuListBack.classList.remove("menu-list-back-active");
  }

  menuPhoneBtn.addEventListener("click", toggleMenu);

  // Перебираем все кнопки и добавляем обработчик
  menuListBtns.forEach(btn => {
      btn.addEventListener("click", closeMenu);
  });
});


document.addEventListener("DOMContentLoaded", function () {
const loginBtn = document.getElementById("header-login-btn");
const closeBtn = document.getElementById("close-popup-log");
const popupLog = document.querySelector(".popup-log");
const backdrop = document.querySelector(".popup-backdrop");

function showPopup() {
    popupLog.style.display = "block";
    backdrop.style.display = "block";
}

function hidePopup() {
    popupLog.style.display = "none";
    backdrop.style.display = "none";
}

loginBtn.addEventListener("click", showPopup);
closeBtn.addEventListener("click", hidePopup);
backdrop.addEventListener("click", hidePopup);
});


const slider = document.getElementById('stacking-range');
const sliderValue = document.getElementById('range-value');
const stackingValue = document.getElementById('stacking-value');
const dropdownBtn = document.querySelector('.dropdown-btn');

        function updateProgress() {
            const percentage = (slider.value - slider.min) / (slider.max - slider.min) * 100 + '%';
            slider.style.setProperty('--progress', percentage);
            sliderValue.textContent = slider.value
            const multiplier = dropdownBtn.textContent.trim() === 'TRX' ? 4 : 1;
            stackingValue.value = slider.value * multiplier; // Обновляем значение в label
        }

        slider.addEventListener('input', updateProgress);
        updateProgress(); // Инициализация
