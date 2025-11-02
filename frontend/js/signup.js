// Signup Form Handler
document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const submitBtn = e.target.querySelector('.btn-submit');
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Signing up...';
      
      const { data } = await apiCall('/auth/signup', 'POST', { name, email, password });
      
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
        submitBtn.textContent = 'Sign Up';
      }
    });
  }
});

