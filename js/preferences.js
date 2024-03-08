'use strict'

var backgroundColor
var txtColor
var birthDate
var birthTime

const user = {
  email: '',
  txtColor: '',
  backgroundColor: '',
  // ,
  // Age : ''
  // ,
  // birthDate: ''
  // ,
  // birthTime: ''
}

// localStorage.clear('user')

function init() {
  const user = loadFromStorage('user')
  console.log(user)
  backgroundColor = user.backgroundColor
  txtColor = user.txtColor
  renderUserColor()
  birthDate = user.birthDate
  birthTime = user.birthTime
  renderUserBirth()
}

function getBackgroundColor() {
  const elColor = document.querySelector('.background-input').value
  console.log('elColor:', elColor)
  const elBody = document.querySelector('body')
  elBody.style.backgroundColor = elColor
  const user = loadFromStorage('user')
  user.backgroundColor = elColor
  saveToStorage('user', user)
  return elColor
}

function getTxtColor() {
  const elColor = document.querySelector('.txt-color-input').value
  console.log('elColor:', elColor)
  const elBody = document.querySelector('body')
  elBody.style.color = elColor
  const user = loadFromStorage('user')
  user.txtColor = elColor
  saveToStorage('user', user)
  return elColor
}

function getBirthDate() {
  const input = document.querySelector('.input-date').value
  const elBirthDate = document.querySelector('.user-birth-date')
  elBirthDate.innerText = `Birth Date: ${input}`

  const user = loadFromStorage('user')
  user.birthDate = input
  console.log(user)
  saveToStorage('user', user)

  return input
}

function getBirthTime() {
  const input = document.querySelector('.input-time').value
  console.log(input)
  const elBirthTime = document.querySelector('.user-birth-time')
  elBirthTime.innerText = `Birth Time: ${input}`

  const user = loadFromStorage('user')
  user.birthTime = input
  console.log(user)
  saveToStorage('user', user)

  return input
}
