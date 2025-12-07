// public/login.js
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const loginData = { email, password };
  
    try {
      // Send POST request to backend to check login credentials
      const response = await fetch('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      const result = await response.json(); // Parse the response
  
      if (response.status === 200) {
        alert(result.message); // If login successful
        window.location.href = '/home'; // Redirect to home page (change as necessary)
      } else {
        alert(result.error); // Show error message if login failed
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error with the login request');
    }
  });
  