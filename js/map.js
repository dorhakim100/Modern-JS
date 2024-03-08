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
  hideDialog()
  if (!loadFromStorage('places')) {
    saveToStorage('places', gPlaces)
  } else {
    gPlaces = loadFromStorage('places')
    console.log('gPlaces:', gPlaces)
  }
}

function getPosition() {
  if (!navigator.geolocation) {
    alert('HTML5 Geolocation is not supported in your browser')
    return
  }

  // One shot position getting or continus watch
  navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
  // navigator.geolocation.watchPosition(showLocation, handleLocationError)
}

function showLocation(position) {
  console.log(position)
  document.getElementById('latitude').innerHTML = position.coords.latitude
  document.getElementById('longitude').innerHTML = position.coords.longitude
  document.getElementById('accuracy').innerHTML = position.coords.accuracy

  var date = new Date(position.timestamp)
  document.getElementById('timestamp').innerHTML =
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  initMap(29.557669, 34.951923)
}

function handleLocationError(err) {
  var errMsg = ''
  switch (err.code) {
    case 1:
      errMsg = "The user didn't allow this page to retrieve a location."
      break
    case 2:
      errMsg = 'Unable to determine your location: ' + err.message
      break
    case 3:
      errMsg = 'Timed out before retrieving the location.'
      break
  }
  const elMsg = document.querySelector('.err-msg')
  elMsg.innerHTML = errMsg
}

function initMap(lat, lng) {
  //   if (!lat) lat = 32.0749831
  //   if (!lng) lng = 34.9120554

  var elMap = document.querySelector('.map')
  var options = {
    center: { lat, lng },
    zoom: 15,
    mapId: 'DEMO_MAP_ID',
  }

  var map = new google.maps.Map(elMap, options)

  var marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: { lat, lng },
    title: 'Hello World!',
  })
}

console.log(
  navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
)

function openAddLocationModal(elBtn) {
  const elDialog = document.querySelector('dialog')
  elDialog.style.display = 'grid'

  elBtn.style.display = 'none'
}

function hideDialog() {
  const elDialog = document.querySelector('dialog')
  elDialog.style.display = 'none'

  const elBtn = document.querySelector('.add-location-btn')
  elBtn.style.display = 'block'
}

function onAddLocation() {
  const elNameInput = document.querySelector('.place-name-input')
  const elLatInput = document.querySelector('.place-lat-input')
  const elLongInput = document.querySelector('.place-long-input')

  const place = {
    placeName: elNameInput.value,
    lat: elLatInput.value,
    long: elLongInput.value,
  }

  let { placeName, lat, long } = place

  let newInput = createPlace(placeName, +lat, +long)
  gPlaces.push(newInput)
  saveToStorage('places', gPlaces)
  console.log(loadFromStorage('places'))
  hideDialog()
}
