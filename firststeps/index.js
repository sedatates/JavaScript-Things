const Person = require('./person')
const Meetup = require('./meetup')
const Chalk = require('chalk')
const Database = require('./database')
const database = require('./database')
const chalk = require('chalk')

const sedat = new Person("sedat",33)
const ates = new Person("ates",12)
const wtmb = new Meetup("tech makers berlin","eurostaff")

sedat.attend(wtmb)
ates.attend(wtmb)
//console.log(wtmb)

console.log("1");

setTimeout(() => {
    console.log("2");
},10)
setTimeout(() => {
    console.log("7");
})
