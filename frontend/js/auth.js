// Authentication helper functions
function checkAuth() {
  const token = getToken();
  if (token) {
    // Update navigation to show logout instead of login
    updateNavigation(true);
    return true;
  } else {
    updateNavigation(false);
    return false;
  }
}

function updateNavigation(isLoggedIn) {
  const loginBtn = document.querySelector('.btn-login');
  if (loginBtn) {
    if (isLoggedIn) {
      loginBtn.textContent = 'Logout';
      loginBtn.href = '#';
      loginBtn.onclick = handleLogout;
      loginBtn.style.cursor = 'pointer';
    } else {
      loginBtn.textContent = 'Login';
      loginBtn.href = 'login.html';
      loginBtn.onclick = null;
    }
  }
}

function handleLogout(e) {
  e.preventDefault();
  removeToken();
  updateNavigation(false);
  showMessage('Logged out successfully', 'success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}

// Check authentication on page load
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
});

// Protect pages that require login
function requireAuth() {
  if (!checkAuth()) {
    showMessage('Please login to access this page', 'error');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500);
    return false;
  }
  return true;
}

