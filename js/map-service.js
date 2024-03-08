'use strict'

var gPlaces = [
  createPlace('Pukis house', 32.1416, 34.831213),
  createPlace('Shukis house', 32.1416, 33.831213),
  createPlace('Mukis house', 31.1416, 34.831213),
]

function createPlace(name, lat, lng) {
  return {
    id: makeId(),
    lat,
    lng,
    name,
  }
}
