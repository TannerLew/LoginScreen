const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  // Prevent the default form submission from refreshing the page
  event.preventDefault();

  // Retrieve current values of the input fields
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Log them to the console
  console.log("Email:", email);
  console.log("Password:", password);
});
