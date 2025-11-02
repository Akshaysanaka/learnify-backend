// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to make API calls
async function apiCall(endpoint, method = 'GET', data = null, token = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  if (data && method !== 'GET') {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    const result = await response.json();
    return { response, data: result };
  } catch (error) {
    console.error('API call error:', error);
    return { 
      response: null, 
      data: { success: false, message: 'Network error. Please check your connection.' } 
    };
  }
}

// Save token to localStorage
function saveToken(token) {
  localStorage.setItem('learnify_token', token);
}

// Get token from localStorage
function getToken() {
  return localStorage.getItem('learnify_token');
}

// Remove token from localStorage
function removeToken() {
  localStorage.removeItem('learnify_token');
}

// Check if user is logged in
function isLoggedIn() {
  return getToken() !== null;
}

// Show message to user
function showMessage(message, type = 'success') {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}`;
  messageDiv.textContent = message;

  document.body.appendChild(messageDiv);

  setTimeout(() => {
    messageDiv.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => {
      messageDiv.remove();
    }, 300);
  }, 3000);
}

