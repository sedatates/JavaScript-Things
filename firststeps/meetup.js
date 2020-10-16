const chalk = require("chalk")
const Chalk = require("chalk")

module.exports = class Meetup{
    constructor(name,location){
        this.name=name
        this.location=location
        this.attendees=[]
    }
    report() {
        console.log(chalk.gray.bgGreen(this.name,this.attendees,this.attendees.length));
    }
}