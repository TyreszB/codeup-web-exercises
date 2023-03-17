// var i = 2
//
// while (i < 65536){
//     console.log(i*=2)
// }


randomCone = Math.floor(Math.random() * 50 ) + 50
console.log(`The cones needed to sale today: ` + randomCone)
var i = 0
while (i < randomCone) {
    do {
        var buyCone = Math.floor(Math.random() * 5) + 1
        console.log(buyCone)
        i += buyCone;
    }
        while (i ==! randomCone) {
            console.log(`You sold ` + buyCone + ` cones!`);
            console.log(`You have ` + (randomCone - i) + ` cones left.`);
        }

}

