function checkEmail() {
  var email = document.getElementsByClassName("registration-form__email")[0].value;
  var resultCheck = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!resultCheck){
    return false;
  }
  return true;
}

function checkValidPasswords() {
  var password = document.getElementsByClassName("registration-form__password")[0].value;
  var passwordRepeat = document.getElementsByClassName("registration-form__password-repeat")[0].value;
  if ((password.length < 6) || (password != passwordRepeat)) {
    return false;  
  }
  return true;
}

function checkConfirmation() {
  var resultCheck = document.getElementsByClassName("registration-form__check-confirmation")[0].checked;
  if (!resultCheck) {
    return false;
  }
  return true;
}

function returnResultRegistration() {
  if (!checkEmail()) {
    return 'Введите валидный e-mail';
  } else if (!checkValidPasswords()) {
    return 'Пароли должны быть неменее 6-ти символов и совпадать.';
  } else {
    return 'Примите условия соглашения.';
  }
  return true;
}