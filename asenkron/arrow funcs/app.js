//arrow functions

const person = {
    age:25,
    tellAge: ()=>{
        console.log(this);
        console.log(this.tellAge);
    }
    
    /*
    tellAge : function() {
        //person - this
        console.log(this);
        console.log(this.age);
    }
    */
    //this - Window

}

person.tellAge();