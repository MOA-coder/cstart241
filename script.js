document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let ic4 = document.getElementById("ic4");

  let erroNome = document.getElementById("erro-nome");
  // AQUI ESTAVA O ERRO: O NOME DA VARIÁVEL É "ERROEMAIL"
  let erroEmail = document.getElementById("erro-email");
  let erroPassword = document.getElementById("erro-pass");
  let erroPhone = document.getElementById("erro-phone");
  let success = document.getElementById("msg");

  let regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let regexPass = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let regexPhone = /^\+?[0-9]{1,3}\s?[0-9]{4,14}$/;

  let validar = true;

  if (nome.length < 6) {
    erroNome.innerText = "O nome deve ter pelo menos 6 caracteres";
    validar = false;
  } else {
    erroNome.innerText = "";
  }

  if (!regexMail.test(email)) {
    // MAS AQUI ESTAVA A SER USADA A VARIÁVEL "ERROMAIL" QUE É INEXISTENTE
    erroEmail.innerText =
      "O e-mail deve ser válido. Por favor, informe um e-mail válido";
    ic4.style.marginTop = "50px";
    validar = false;
  } else {
    erroEmail.innerText = "";
  }

  if (!regexPass.test(password)) {
    erroPassword.innerText =
      "A palavra-passe deve ter pelo menos 8 caracteres, uma letra maíuscula e incluir um carácter especial";
    validar = false;
  } else {
    erroPassword.innerText = "";
  }

  if (!regexPhone.test(phone)) {
    erroPhone.innerText = "Número de telefone inválido";
    erroPhone.style.color = "red";
    validar = false;
  } else {
    erroPhone.innerText = "";
  }

  if (validar) {
    success.innerText = "O formulário foi enviado com sucesso!";
    success.style.color = "green";
  } else {
    success.innerText = "";
  }
});
