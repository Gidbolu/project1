document.getElementById('validationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission until validation passes

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = document.getElementById('comment').value.trim();

    let isValid = true;

    // Validate name
    if (name.length < 6) {
      document.getElementById('nameError').textContent = 'Name must be at least 6 characters.';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate password
    if (comment.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
      isValid = false;
    }

    // If valid, submit the form
    if (isValid) {
      alert('Form submitted successfully!');
      // Uncomment the following line to actually submit the form
      // this.submit();
    }
  });