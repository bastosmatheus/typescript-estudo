import isEmail from "validator/lib/isEmail";

const form = document.querySelector("form") as HTMLFormElement;
const inputUsername = document.querySelector("#username") as HTMLInputElement;
const inputEmail = document.querySelector("#email") as HTMLInputElement;
const inputPassword = document.querySelector("#password") as HTMLInputElement;
const inputPasswordTwo = document.querySelector("#password2") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  hiddenErrorMessage();

  checkUser(inputUsername);
  checkEmail(inputEmail);
  checkPasswords(inputPassword, inputPasswordTwo);
  checkEmptyInputs(inputUsername, inputEmail, inputPassword, inputPasswordTwo);
});

function showErrorMessage(input: HTMLInputElement, message: string): void {
  const spanError = input.nextElementSibling as HTMLSpanElement;

  spanError.classList.add("show-error-message");
  spanError.textContent = message;
}

function hiddenErrorMessage(): void {
  const spansError = document.querySelectorAll(".form-fields span");

  spansError.forEach((spanError) => {
    spanError.textContent = "";
    spanError.classList.remove("show-error-message");
  });
}

function checkEmptyInputs(
  inputUsername: HTMLInputElement,
  inputEmail: HTMLInputElement,
  inputPassword: HTMLInputElement,
  inputPasswordTwo: HTMLInputElement
): void {
  const valueEmptyInputEmail = inputEmail.value === "";
  const valueEmptyInputUsername = inputUsername.value === "";
  const valueEmptyInputPassword = inputPassword.value === "";
  const valueEmptyInputPasswordTwo = inputPasswordTwo.value === "";

  if (valueEmptyInputUsername) showErrorMessage(inputUsername, "O campo não pode estar vazio.");
  if (valueEmptyInputEmail) showErrorMessage(inputEmail, "O campo não pode estar vazio.");
  if (valueEmptyInputPassword) showErrorMessage(inputPassword, "O campo não pode estar vazio.");
  if (valueEmptyInputPasswordTwo)
    showErrorMessage(inputPasswordTwo, "O campo não pode estar vazio.");
}

function checkEmail(inputEmail: HTMLInputElement): void {
  const valueInputEmail = inputEmail.value;
  if (!isEmail(valueInputEmail))
    showErrorMessage(inputEmail, "Insira um endereço de e-mail válido.");
}

function checkUser(inputUsername: HTMLInputElement): void {
  const valueInputUsername = inputUsername.value;
  if (valueInputUsername.length < 3)
    showErrorMessage(inputUsername, "Por favor, digite um nome válido. (min. 3 letras.)");
}

function checkPasswords(inputPassword: HTMLInputElement, inputPasswordTwo: HTMLInputElement): void {
  const valueInputPassword = inputPassword.value;
  const valueInputPasswordTwo = inputPasswordTwo.value;
  if (valueInputPassword.length < 8) {
    return showErrorMessage(inputPassword, "Tamanho minimo de senha: 8 caracteres.");
  }

  if (valueInputPassword !== valueInputPasswordTwo) {
    showErrorMessage(inputPassword, "As senhas digitadas não coincidem.");
    showErrorMessage(inputPasswordTwo, "As senhas digitadas não coincidem.");
  }
}
