// Login Form Handler
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const submitBtn = e.target.querySelector('.btn-submit');
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Logging in...';
      
      const { data } = await apiCall('/auth/login', 'POST', { email, password });
      
      if (data.success) {
        saveToken(data.token);
        showMessage(data.message, 'success');
        // Save user info
        if (data.user) {
          localStorage.setItem('learnify_user', JSON.stringify(data.user));
        }
        setTimeout(() => {
          window.location.href = 'home.html';
        }, 1000);
      } else {
        showMessage(data.message, 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Login';
      }
    });
  }
});

