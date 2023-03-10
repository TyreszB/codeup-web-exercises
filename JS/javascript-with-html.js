"use strict";

// console.log("this is a message")

// var mySchool = `codeup`

// console.log(mySchool)

// alert(`Hey! this is an alert!`)

// var likesPizza = confirm(`Do you like pizza?`)

// console.log(likesPizza)

// var bestToppings = prompt(`What do you like on your pizza?`)

// console.log(bestToppings)

var personName = prompt(`Whats your name?`)
var personAge = Number(prompt(`What is your age?`))
var anGetIn = false
var ageLimit = 21

anGetIn = personAge > ageLimit
console.log(personName, `can enter club!`)

