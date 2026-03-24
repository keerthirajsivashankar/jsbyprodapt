const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  if (username.trim() === "") {
    alert("Username is required.");
    return;
  }

  if (email.trim() === "") {
    alert("Email is required.");
    return;
  }

  // Simple email validation
  const NamePattern = /^[a-zA-Z0-9_]{3,20}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pawordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!pawordPattern.test(password)) {
    alert(
      "Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.",
    );
    return;
  }

  if (!NamePattern.test(username)) {
    alert("Username can only contain letters, numbers, and underscores.");
    return;
  }
  alert("Form submitted successfully!");
});
