/* NAVBAR */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});


/* LOGIN  */
function validate() {
  document.getElementById('userError').innerHTML = ""
  document.getElementById('pswError').innerHTML = ""
  let username = document.getElementById('uname')
  if (username.value.length < 3) {
    document.getElementById('userError').innerHTML = "Username must be at least 3 characters"
  } else if (username.value[0] !== username.value[0].toUpperCase()) {
    document.getElementById('userError').innerHTML = "Username must start with capital letter"
  }

  let password = document.getElementById('psw')
  if (password.value.length < 5) {
    document.getElementById('pswError').innerHTML = "Password must be at least 5 characters"
  }
}