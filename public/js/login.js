const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    console.log("LOGIN")
    if (email && password) {
      
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response)

     
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
        console.log(response)
        // Else alerts with a standard status text that equals to the error response.
      }
    }
  };
  



  
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  