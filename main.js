// Working with an array - Create a bad phrase generator
let bodyParts = [`nose`,`lips`,`arms`,`legs`,`body`,];
let animals = ['chicken','elephant','monkey','rooster','ostrich']
let randomWords = [`funny`,`big`,`small`]
function random(){
    return Math.floor(Math.random()*5)
}
console.log(`Your `+bodyParts[random()]+` is like `+animals[random()])

