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

  // Переключаем display: flex инлайн-стилем
  if (loginLogout.style.display === 'flex') {
      loginLogout.style.display = 'none';
      logoutBackdrop.style.display = 'none';
  } else {
      loginLogout.style.display = 'flex';
      logoutBackdrop.style.display = 'flex';
  }
});

