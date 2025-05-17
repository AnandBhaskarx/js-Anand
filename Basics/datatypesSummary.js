//kis tarah se data ko memory me store and access kiya jata he uske 2 tarike hein , primitive and non primitive

// primitive -7 : 1.string, Number, Boolean, null, Undefined, Symbol, BigInt

// 

// Reference / Non-primitive : Array, Objects, Functions

/*

JavaScript ek **dynamic** type language hai. Matlab, jab aap ek variable declare karte hain, toh aapko uska data type specify karne ki zaroorat nahi hoti. JavaScript khud samajh leta hai ki variable kis type ka data store kar raha hai | Computer Hindi Notes](https://computerhindinotes.com/data-types-in-javascript/). 

Agar aap ek variable me **number** assign karte hain, toh wo number treat hoga. Agar aap **string** assign karte hain, toh wo string treat hoga. Aur agar aap baad me usi variable me **koi aur type ka data** daal dete hain, toh JavaScript usko accept kar leta hai bina kisi error ke. Is wajah se JavaScript ko **loosely typed** ya **dynamically typed** language kaha jata hai. 

Lekin agar aap **static properties aur methods** ka use karte hain, toh wo **class level** par define hote hain aur bina instance create kiye access kiye ja sakte hain. Static properties aur methods ka use **object instances** ke saath nahi kiya ja sakta. 

Agar aapko aur detail chahiye toh [yahaan dekhein](https://ehindistudy.com/2025/01/30/javascript-data-types-hindi/) aur [yahaan bhi](https://computerhindinotes.com/data-types-in-javascript/). 😃

*/

const score = 100
const scoreValue = 2.3

const isLoggedIn = true

const outsideTemp = null

let username;

// to declare symbols 

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id==anotherId)
//that means symbol is unique even if the value is same 

console.table([id,anotherId])

const bigNumber = 34533333938839938n
//by writing n simply its a big number 


console.log(typeof bigNumber)

const heros=["shaktiman","nagraj","doga"]
let myObj={
    name:"anand",
    age:19
}

const myFunction = function(){
console.log("hello world")
}

console.table([heros])

console.log(heros)

console.log(typeof outsideTemp)