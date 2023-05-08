"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


const moreThan3 = users.filter(user => user.languages.length >= 3);
console.log(moreThan3)

const emailArr = users.map(user => user.email);
console.log(emailArr)


const years = users.map(user => user.yearsOfExperience);

const totalYearOfExperience = years.reduce((totalYr, nextYr) => totalYr + nextYr);
console.log(totalYearOfExperience)

console.log(`The average year of experience is ${totalYearOfExperience / years.length}`);

const longEmail = emailArr.reduce((currentEmail, nextEmail) => currentEmail.length > nextEmail.length ? currentEmail : nextEmail)
console.log(longEmail)

const names = users.map(user => user.name)

const instructors = names.reduce((prevUser, nextUser) => {
    return `Your instructors are ${prevUser}, ${nextUser}.`
});
console.log(instructors)

const langs = users.map(user => user.languages);

const langString = langs.reduce((currentLang, nextLang) => {
    return `${currentLang},${nextLang}`
})

const langArr = langString.split(",")

const uniqueLang = langArr.reduce((acc, value) => {
    let finalArr = []
    acc[value] = (acc[value] || 0) + 1;
    return acc;
    }, {});

console.log(uniqueLang)

const finalArr = uniqueLang.filter(lang => lang[num] === 1)
console.log(finalArr)