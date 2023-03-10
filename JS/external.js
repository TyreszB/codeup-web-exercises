 "use strict"
//
// console.log(`Hello from external JavaScript`)
//
// alert(`Welcome to my Website!`)
//
// var color = prompt(`Whats your favorite color?`)
// console.log(color, `is a great choice of color!`)

 var littleMM =  Number(prompt(`How many days did you rent Little Mermaid: `))
 var bBear = Number(prompt(`How many days did you rent Brother Bear: `))
 var hercules = Number(prompt(`How many days did you rent Hercules: `))

//  add all days together for movies and multiply by 3
 var priceForMovies = (littleMM + bBear + hercules) * 3
 alert(`The price for renting the movies are: $`+ priceForMovies)
 // add variables for the companies times the amount of hours that they worked
 var googleRate = prompt(`How many hours did you work at Google? `) * 400
 var amazonRate = prompt(`How many hours did you work at Amazon? `) * 380
 var facebookRate = prompt(`How many hours did you work at Facebook? `) *350
 // add all the pay from the week
 var payWeek = googleRate + amazonRate + facebookRate
 alert(`Your final pay of the week is: $`+ payWeek)
// create confirmation prompts where the student can attend class status
 var noSpace = confirm(`Is there class space for the student?`)
 var noConflicts = confirm(`Does student have free schedule?`)
 // create situation where student can enroll in class
 var canEnroll = noConflicts == true && noSpace == true
 alert(`Can the student enroll in class:`+ canEnroll)
 // create situation where person an use discount
 var items = Number(prompt(`How many items were bought? `))
 var expired = confirm(`Is the offered active still?`)
 var premium = confirm(`Are you a Premium Member?`)
//  make and or logic for premium members and not premium members
 var offerAccept = items > 2 && expired == true && premium == false || expired == true && premium == true
 alert(`Can customer use product offer? `+ offerAccept)
