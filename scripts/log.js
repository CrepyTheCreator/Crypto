document.querySelectorAll('.more-btn').forEach(button => {
  button.addEventListener('click', () => {
      // Находим ближайший .log-card (родительский элемент)
      const card = button.closest('.log-card');

      // Внутри карточки ищем .log-buttons и переключаем у него класс active
      const buttons = card.querySelector('.log-buttons');
      buttons.classList.toggle('active-log');
  });
});

document.querySelector('.header-login-btn').addEventListener('click', () => {
  const loginLogout = document.querySelector('.login-logout');
  const logoutBackdrop = document.querySelector('.logout-backdrops');
  const body = document.body;

  const isOpen = loginLogout.style.display === 'flex';

  if (isOpen) {
      loginLogout.style.display = 'none';
      logoutBackdrop.style.display = 'none';
      body.style.overflow = ''; // Возвращаем прокрутку
  } else {
      loginLogout.style.display = 'flex';
      logoutBackdrop.style.display = 'flex';
      body.style.overflow = 'hidden'; // Блокируем прокрутку
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('.main');
  setTimeout(() => {
      main.classList.remove('hidden');
  }, 100); // Убираем скрытие после загрузки
});

document.querySelectorAll('.go-stacking').forEach(button => {
  button.addEventListener('click', function (event) {
      event.preventDefault();
      const main = document.querySelector('.main');
      main.classList.add('hidden');

      setTimeout(() => {
          window.location.href = "stacking.html"; // Путь до новой страницы
      }, 500);
  });
});

document.querySelectorAll('.go-title').forEach(button => {
  button.addEventListener('click', function (event) {
      event.preventDefault();
      const main = document.querySelector('.main');
      main.classList.add('hidden');

      setTimeout(() => {
          window.location.href = "index.html"; // Путь до новой страницы
      }, 500);
  });
});

document.querySelectorAll('.go-ref').forEach(button => {
  button.addEventListener('click', function (event) {
      event.preventDefault();
      const main = document.querySelector('.main');
      main.classList.add('hidden');

      setTimeout(() => {
          window.location.href = "ref.html"; // Путь до новой страницы
      }, 500);
  });
});