//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/


let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function printPerson3() {
    for (const [key, value] of Object.entries(person3)) {
        if (Array.isArray(value)) {
            console.log(`${key}: `)
            value.forEach(thing => console.log(thing))
        }   else {
                console.log(`${key}: ${value}`)
        }   
    } 
}

printPerson3()



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


function Person(name, age) {
    this.name = name
    this.age = age

    this.printinfo = () => {
        console.log(`name: ${this.name} age: ${this.age}`)
    }
    this.incrementAge = () => {
        this.age++
    }
    this.addAge = (ageParam) => {
        this.age = ageParam
    }
}
const dan = new Person ("dan", 24)

dan.printinfo()

dan.incrementAge()
dan.incrementAge()
dan.incrementAge()
dan.printinfo()


const justin = new Person("justin", 34)

justin.printinfo()



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


const lengthOfString = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 10){
            resolve(string)
        }else {
            reject(string)
        }
    })
}

lengthOfString("How's the weather?")

    .then((result) => {
        console.log(`Big word ${result}`)
    })
    .catch((lessThanTen) => {
        console.log(`Small Number ${lessThanTen}`)
    })



// ========== CODEWARS PROBLEMS ========== //


// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

function doubleInteger(i) {
 
    return i * 2;
}


// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function solution(str) {
    
    return str.split("").reverse().join("");
}






