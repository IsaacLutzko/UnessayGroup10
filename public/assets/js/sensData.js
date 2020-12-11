$(document).ready(function() {

  $('#signup').attr('disabled', true);
  $('#username').on('keyup', checkSignupForm);
  $('#password').on('keyup', checkSignupForm);

  function checkSignupForm() {
    var disabledSignup = $('#username').val().trim() === '' || $('#password').val().trim() === '';
    $('#signup').attr('disabled', disabledSignup);
  }

});