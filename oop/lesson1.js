// definig new object 

/*
1- object literal
*/

//1
let user = {
    // Properties -> key and value
    firstname : "sayed",
    lastname : "mohamed",
    age : 21,

    //Methods
    getFullName: function (){
        return this.firstname + " " + this.lastname
    }
}


// accessing object properties 
console.log(user.firstname)
console.log(user.lastname)
console.log(user["age"])

// accessing object methods 

console.log(user.getFullName())
