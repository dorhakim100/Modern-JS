'use strict'

var backgroundColor
var txtColor
var birthDate
var birthTime

function init() {
  // if(!loadFromStorage('user')){
  //     createUser()
  // }
  const user = loadFromStorage('user')
  backgroundColor = user.backgroundColor
  txtColor = user.txtColor
  renderUserColor()
  birthDate = user.birthDate
  birthTime = user.birthTime
  renderUserBirth()
}
