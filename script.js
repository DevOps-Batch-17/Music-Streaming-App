function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');
   
    // Get form values
    const username = form.elements['username'].value;
    const email = form.elements['email'].value;
    const phone number = form.elements['phone number'].value;
    const password = form.elements['password'].value;
   
    // Normally, you'd send this data to a server for processing
    // For this example, let's just log the values
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('phone Number:', phone number); 
    console.log('Password:', password);
   
    // Display success message
    successMessage.classList.remove('hidden');
  }
  
