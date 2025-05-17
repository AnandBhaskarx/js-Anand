const mArr = [0,1,2,3,4,true,"anand"]

//Arrays size can be changed ,, elemenets can be added or removed
const myHeros = ["shatiman", "nagraj"]
//another way to declare a array ,, no neeed for square bracket
const myArr2 = new Array (1,2,3,4)
// console.log(myArr2[2])

//Array methods

// myArr2.push(6)//insert the element at last

// myArr2.pop()//removes the last element

// myArr2.unshift(9)//insert the element at the first and shift all the elements ,, not a optimized technique for large data set


// myArr2.shift();//removes the starting element


// console.log(myArr2.includes(9))

// console.log(myArr2.indexOf(31))//return -1 if the value is not preset else the index of the element

// console.log(myArr2.indexOf(3))


// const newArr = myArr2.join() //joins adds all the array element to string as well change its type to string 
// console.log(myArr2)
// console.log(newArr)
// console.log(typeof newArr) string

// slice , splice method

console.log("A",myArr2)

const myn1 = myArr2.slice(1,3) // it returns the element from index1 to index2-1 ,,, 
// but it does not manipulates the original array

console.log(myn1)

console.log("B",myArr2)

const myn2 = myArr2.splice(1,3)//splice  returns the element from index1 to index2
//but it manipulates the original array ad removes the splice elements.

console.log(myn2)

console.log("C",myArr2)
