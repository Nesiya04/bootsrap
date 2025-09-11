const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

function showRegister() {
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
}

function showLogin() {
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
}

// Example submission handling



 document.getElementById("registerForm").addEventListener("submit", function(event) {
      let isValid = true;
 
       const registerUsername = document.getElementById("registerUsername").value;
      const registerEmail = document.getElementById("registerEmail").value;
      const registerPassword = document.getElementById("registerPassword").value;

       const nameError = document.getElementById("nameError").textContent=""
      const emailError = document.getElementById("emailError").textContent=""
      const passwordError = document.getElementById("passwordError").textContent=""

      
    if (registerUsername === " ") {
        document.getElementById("nameError").textContent = "Name is required!";
        isValid = false;
      }

      
        const registerEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!registerEmailRegex.test(registerEmail)) {
        document.getElementById("emailError").textContent = "Please enter a valid email!";
        isValid = false;
      }


      if (registerPassword.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long!";
        isValid = false;
      }
if (isValid) {
        alert("Form submitted successfully!");
      } 
      else {
        alert("Please fix the errors!");
        event.preventDefault(); 
      }

    });
      


