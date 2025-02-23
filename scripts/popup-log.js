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
