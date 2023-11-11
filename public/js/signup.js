const signupFormHandler = async (event) => {
    event.preventDefault();
    // preventDefault keeps page from reloading.
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // Above is query selectors for getting user input and also trimming it.
   console.log(name,email,password)
    if (name && email && password) {
        console.log("signup")
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
        
      })
      
      console.log(response);
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
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);