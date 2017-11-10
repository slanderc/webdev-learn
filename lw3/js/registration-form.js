function checkEmail() {
  var email = document.getElementsByClassName("registration-form__email")[0].value;
  var resultCheck = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!resultCheck) {
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

document.getElementsByClassName("registration-form")[0].onsubmit = function() {
  if (checkEmail() && checkValidPasswords() && checkConfirmation()) {
    alert("Регистрация прошла успешно!");  
  } else {
    if (!checkEmail()) {
      alert('Введите валидный e-mail.');
    } else if (!checkValidPasswords()) {
      alert('Пароли должны быть неменее 6-ти символов и совпадать.');
    } else {
      alert('Примите условия соглашения.');
    }
    return false;
  }
};