// Car Array ------------------------------------------

const cars = ['Ford', 'Chevy', 'Hyundai', 'Toyota']
console.log(cars.length);
const moreCars = ['VW', 'Mazda', 'Nissan', 'Honda']
totalCars = cars.concat(moreCars)
console.log(totalCars);
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));
let stringOfCars = totalCars.join();
console.log(stringOfCars)
carsFromString = stringOfCars.split()
console.log(carsFromString)
carsInReverse = totalCars.reverse()
console.log(carsInReverse)
carsInReverse.sort()
console.log("cars in alphabetic order:", carsInReverse);



// Pets Array --------------------------------------

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4, 6)
console.log("After SLICE:", reptiles);
console.log(pets);
const removedReptiles = pets.splice(4, 2, 'hamster')
console.log("Removed Reptiles Array:", removedReptiles);
console.log("After splice was used:", pets);
const removedPet = pets.pop()
console.log("Removed animal from Array from the pop func:", removedPet);
console.log("Pets after the pop func is used:", pets);
const removedPetPush = pets.push(removedPet)
console.log("Pets after the push func is used:", pets);
const newPetArray = pets.shift()
console.log("New pets after SHIFT:", pets);
const petArrayShift = pets.unshift('turtle')
console.log("Pet Array after unshift:", pets);


// Numbers Array ----------------------------------------

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

// console.log("Original output of Numbers Array:", numbers);
let newNumbersArray = numbers.forEach(function addTwo(x, y, z){
  // numbers.forEach(function(item 'x', index 'y', array 'z')){}
let newNumbersArray =  x+2

console.log(newNumbersArray);
})

console.log();







