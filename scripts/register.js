'use strict'
console.log('Yo!')

let id = 0;

class User{
  constructor(email, pw, fn, ln, age, address, phone, payment, color) {
    this.email = email;
    this.pw = pw;
    this.fn = fn;
    this.ln = ln;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
    this.id = id++;
  }
}

function regi(e) {
  
  let email = $('#email').val()
  let pw = $('#password').val()
  let fn = $('#firstName').val()
  let ln = $('#lastName').val()
  let age = $('#age').val()
  let address = $('#address').val()
  let phone = $('#phone').val()
  let payment = $('#payment').val()
  let color = $('#color').val()

  let newUser = new User(email,pw,fn,ln,age,address,phone,payment,color)
  $('.userTable').append(newRow(newUser))
  console.log(newUser)
}

function newRow(user) {
  return `<tr id="${user.id}">
    <td>${user.fn}</td>
    <td>${user.ln}</td>
    <td>${user.email}</td>
    <td>${user.age}</td>
    <td>${user.phone}</td>
    <td>${user.addres}</td>
  </tr> `
}

function init() {
  console.log('Init')
}

window.onload=init;
