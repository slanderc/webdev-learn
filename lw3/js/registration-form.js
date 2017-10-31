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