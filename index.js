// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop("Garfield");
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift("Milo");
}

function appendDriver(name) {
  drivers.slice(drivers);
}