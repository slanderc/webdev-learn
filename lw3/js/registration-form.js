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

$(".registration-form").submit(function() {
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
});