const loginFormHandler = async (event) => {
    event.preventDefault();

    console.log('here we go');
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const pass = document.querySelector('#password-login').value.trim();
  
    if (email && pass) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, pass }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  
  document
    .querySelector('#login-form')
    .addEventListener('click', loginFormHandler);
  
