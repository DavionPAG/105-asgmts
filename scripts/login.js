function login() {
  let un = $('#un').val()
  let pw = $('#pw').val()

  let userlist = checkLS();
  console.log(userlist)
  let flag = false;

  userlist.forEach(user => {
    if (user.email === un && user.pw === pw) {
      flag = true;
      alert('Welcome')
      window.location.href="../users.html"
    }
  })
  if (!flag) {
    $('#alertError').removeClass('hide')
    setTimeout(() => {
      $('#alertError').addClass('hide')

    }, 3500)
  }
}

function init() {
  $('#login').click(login)
}

window.onload = init;