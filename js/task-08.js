const form = document.querySelector(".login-form");

form.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();
  const {elements: { email, password }} = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь-ласка заповніть усі поля!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
