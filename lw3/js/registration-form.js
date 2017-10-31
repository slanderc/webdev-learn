function checkEmail() {
  var email = document.getElementsByClassName("registration-form__email")[0].value;
  var resultCheck = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!resultCheck){
    return false;
  }
  return true;
}
