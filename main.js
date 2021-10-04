// Working with an array - Create a bad phrase generator
// - use `+` for string
// - use `join` 
let bodyParts = [`nose`,`lips`,`arms`,`legs`,`body`,];
let animals = ['Chicken','Elephant','Monkey','Rooster','Ostrich']
let randomWords = [`funny`,`big`,`small`]
function random(){
    return Math.floor(Math.random()*5)
}
// +
console.log(`Your `+bodyParts[random()]+` is like `+animals[random()])
// join
let randmPhrase = [`Your`,bodyParts[random()],`is like`,animals[random()]].join(" ")
console.log(randmPhrase)