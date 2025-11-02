// Contact Form Handler
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const submitBtn = e.target.querySelector('.btn-submit');
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      const { data } = await apiCall('/contact/submit', 'POST', { name, email, message });
      
      if (data.success) {
        showMessage(data.message, 'success');
        e.target.reset();
      } else {
        showMessage(data.message, 'error');
      }
      
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    });
  }
});

