"use strict";

fetch(' https://api.github.com/users/TyreszB/events', {headers: {'Authorization': OPEN_GITHUB_APPID}})
    .then(res => res.json())
    .then( data => {
        console.log(`${data[0].actor.login} posted a commit at ${data[0].created_at}`)})


   function wait(mili){
    return new Promise(res => {
        setTimeout(() => {console.log(`success: you did it in ${mili} seconds`), mili})
    })
   }


wait(4000)