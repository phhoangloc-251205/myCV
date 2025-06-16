function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById("theme-toggle");
  btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}
