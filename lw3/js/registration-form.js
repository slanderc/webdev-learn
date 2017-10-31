function checkEmail() {
  var email = $(".registration-form__email");
  var resultCheck = $(email[0]).val().match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!resultCheck){
    return false;
  }
  return true;
}

function checkValidPasswords() {
  var password = $(".registration-form__password"); 
  var passwordRepeat = $(".registration-form__password-repeat");
  if (($(password[0]).val().length < 6) 
      || ($(password[0]).val() != $(passwordRepeat[0]).val())) {
    return false;  
  }
  return true;
}

function checkConfirmation() {
  if ($(".registration-form__check-confirmation").prop("checked")) { 
    return true;
  }
  return false;
}

function returnResultRegistration() {
  if (!checkEmail()) {
    return "Введите валидный e-mail";
  } else if (!checkValidPasswords()) {
    return "Пароли должны быть неменее 6-ти символов и совпадать.";
  } else {
    if (!checkConfirmation()) {
      return "Примите условия соглашения.";
    }
  }
  return true;
}

$(".registration-form").submit(function() {
  if (returnResultRegistration() === true) {
    alert("Регистрация прошла успешно!");  
  } else {
    alert(returnResultRegistration());
    return false;
  }
});