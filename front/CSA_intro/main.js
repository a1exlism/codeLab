$(function() {

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', './particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  /* Login/Register panel switch */
  $('#login-form-link').click(function(event) {
    $('#form-login').delay(150).fadeIn(150);
    $('#form-register').fadeOut(150);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    event.preventDefault(); //防止url被打开
  });
  $('#register-form-link').click(function(event) {
    $('#form-register').delay(150).fadeIn(150);
    $('#form-login').fadeOut(150);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    event.preventDefault(); //防止url被打开
  });

  // get Browser info
  var size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
  }; 

});
