const form = document.querySelector("form");

const email = document.querySelector("#email");
const mailError = document.querySelector("#_email");
const passError = document.querySelector("#_password");
const password = document.querySelector("#password");
const text = document.querySelector("#text");
const nameErro = document.querySelector("#_text");

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
// if(test.value.test(passwordPatter){}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  emailErro();
  passwordError();
  showError();
});
email.addEventListener("input", () => {
  emailErro();
});
function emailErro() {
  if (email.value === "") {
    mailError.textContent = "Please enter a value";
    // setTimeout(() => {
    //   mailError.textContent = "";
    // }, 2000);
  } else if (email.validity.typeMismatch) {
    mailError.textContent = "Please enter a valid email address";
  } else {
    mailError.textContent = "";
  }
}

// forms.addEventListener("submit", (e) => {
//   e.preventDefault();
//   showError();
// });

text.addEventListener("input", () => {
  showError();
});
function showError() {
  if (text.value === "") {
    nameErro.textContent = "Please enter a value";
    // setTimeout(() => {
    //   nameErro.textContent = "";
    // }, 2000);
  } else if (text.value.length < 5) {
    nameErro.textContent = "please your input should be more then 5 characters";
  } else {
    nameErro.textContent = "";
  }
}

password.addEventListener("input", () => {
  passwordError();
  console.log(password.value);
});

function passwordError() {
  if (password.value === "") {
    passError.textContent = "please enter a password";
    // setTimeout(() => {
    //   passError.textContent = "";
    // }, 2000);
  }
  // else if (!password.value.test(passwordPattern)) {
  // passError.textContent = "Password should not be less  then 5";
  // }
  else {
    passError.textContent = "";
  }
}

// const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
// if(test.value.test(passwordPatter){}
