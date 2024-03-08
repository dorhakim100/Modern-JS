'use strict'

function createUser() {
  return {
    email: '',
    txtColor: '',
    bgColor: '',
    Age: '',
    birthDate: '',
    birthTime: '',
  }
}

function renderUserColor() {
  const elBody = document.querySelector('body')
  elBody.style.backgroundColor = backgroundColor
  elBody.style.color = txtColor
}

function renderUserBirth() {
  const elBirthDate = document.querySelector('.user-birth-date')
  elBirthDate.innerText = `Birth Date: ${birthDate}`

  const elBirthTime = document.querySelector('.user-birth-time')
  elBirthTime.innerText = `Birth Date: ${birthTime}`
}
