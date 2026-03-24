const form = document.getElementById("customerForm");
const tableBody = document.getElementById("customerTable");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const contact = document.getElementById("contact");
  const accountType = document.getElementById("accountType");

  let valid = true;

  // Name validation: alphabets only
  if (!/^[A-Za-z]+$/.test(name.value.trim())) {
    name.classList.add("is-invalid");
    valid = false;
  } else {
    name.classList.remove("is-invalid");
    name.classList.add("is-valid");
  }

  // Email validation: HTML5 type=email already helps, but extra regex
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    email.classList.add("is-invalid");
    valid = false;
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  }

  // Contact validation: 10 digits, starts with 7–9
  if (!/^[7-9]\d{9}$/.test(contact.value.trim())) {
    contact.classList.add("is-invalid");
    valid = false;
  } else {
    contact.classList.remove("is-invalid");
    contact.classList.add("is-valid");
  }

  // Account type validation
  if (accountType.value === "") {
    accountType.classList.add("is-invalid");
    valid = false;
  } else {
    accountType.classList.remove("is-invalid");
    accountType.classList.add("is-valid");
  }

  // If all valid, add to table
  if (valid) {
    const customer = {
      name: name.value.trim(),
      email: email.value.trim(),
      contact: contact.value.trim(),
      accountType: accountType.value,
    };

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${customer.name}</td>
      <td>${customer.email}</td>
      <td>${customer.contact}</td>
      <td>${customer.accountType}</td>
    `;
    tableBody.appendChild(row);

    // Reset form
    form.reset();
    [name, email, contact, accountType].forEach((el) =>
      el.classList.remove("is-valid"),
    );
  }
});
