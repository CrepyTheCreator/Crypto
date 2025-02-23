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

document.querySelectorAll('.go-stacking').forEach(button => {
  button.addEventListener('click', async function () {
      const mainContainer = document.querySelector('.main');

      try {
          // Загружаем HTML-файл
          const response = await fetch('stacking.html'); // Замените на нужный путь
          if (!response.ok) throw new Error('Ошибка загрузки файла');

          // Преобразуем полученный HTML в DOM
          const text = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(text, 'text/html');

          // Находим `.main` в загруженном файле
          const newMainContent = doc.querySelector('.main');
          if (!newMainContent) throw new Error('Контейнер .main не найден в файле');

          // Подставляем его содержимое в текущий `.main`
          mainContainer.innerHTML = newMainContent.innerHTML;

          window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
          });

          // Добавляем класс кнопке
          button.classList.add('its-stake');
      } catch (error) {
          console.error('Ошибка:', error);
      }
  });
});

document.querySelectorAll('.go-title').forEach(button => {
  button.addEventListener('click', async function () {
      const mainContainer = document.querySelector('.main');

      try {
          // Загружаем HTML-файл
          const response = await fetch('loged.html'); // Замените на нужный путь
          if (!response.ok) throw new Error('Ошибка загрузки файла');

          // Преобразуем полученный HTML в DOM
          const text = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(text, 'text/html');

          // Находим `.main` в загруженном файле
          const newMainContent = doc.querySelector('.main');
          if (!newMainContent) throw new Error('Контейнер .main не найден в файле');

          // Подставляем его содержимое в текущий `.main`
          mainContainer.innerHTML = newMainContent.innerHTML;

          window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
          });

          // Добавляем класс кнопке
          button.classList.add('its-title');
      } catch (error) {
          console.error('Ошибка:', error);
      }
  });
});
