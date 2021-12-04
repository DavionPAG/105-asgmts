
function listUser(users) {
  users.forEach(user => {
    $('.userTable').append(
      `<tr>
       <td>${user.fn}</td>
       <td>${user.ln}</td>
       <td>${user.email}</td>
       <td>${user.age}</td>
       <td>${user.phone}</td>
       <td>${user.address}</td>
       </tr>`
    )
  });
}

function init() {
  let data = checkLS()
 listUser(data)
}

window.onload = init;