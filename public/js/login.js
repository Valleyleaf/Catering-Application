const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && password) {
      console.log(email , password)
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
  



  const signupFormHandler = async (event) => {
    event.preventDefault();
    // preventDefault keeps page from reloading.
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // Above is query selectors for getting user input and also trimming it.
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // Check and make sure that userRoutes is set up to properly work with this.
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
        // What is /profile. I assume user profile. replace is basically a reload/refresh in this case.
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  // document
  //   .querySelector('.signup-form')
  //   .addEventListener('submit', signupFormHandler);