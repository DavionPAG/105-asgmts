function saveUser(user) {
  let data = checkLS()
  data.push(user)
  let strUser = JSON.stringify(data)
  localStorage.setItem('user',strUser)
}

function checkLS() {
  let data = localStorage.getItem('user');
  let list;
  if(!data) {
    return []
  } else {
    list = JSON.parse(data);
  }
  return list
}