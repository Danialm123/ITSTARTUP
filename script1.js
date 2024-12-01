function register() {
    var regUsername = document.getElementById('regUsername').value;
    var regPassword = document.getElementById('regPassword').value;
  
    localStorage.setItem('username', regUsername);
    localStorage.setItem('password', regPassword);
  
    toggleForms();
  }
  
  function login() {
    var inputUsername = document.getElementById('loginUsername').value;
    var inputPassword = document.getElementById('loginPassword').value;
  
    var savedUsername = localStorage.getItem('username');
    var savedPassword = localStorage.getItem('password');
  
    if (inputUsername === savedUsername && inputPassword === savedPassword) {
      window.location.href = './index.html'; // Перенаправление на другую страницу
    } else {
      alert('Неверные логин или пароль');
    }
  }
  
  function toggleForms() {
    var loginForm = document.getElementById('loginForm');
    var registrationForm = document.getElementById('registrationForm');
  
    if (loginForm.style.display === 'none') {
      loginForm.style.display = 'block';
      registrationForm.style.display = 'none';
    } else {
      loginForm.style.display = 'none';
      registrationForm.style.display = 'block';
    }
  }

  