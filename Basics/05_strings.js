const name ="Anand "
const repocount="50"

// console.log(name+repocount)

// in todays date we use backticks,``, here we use stringinterpolation

console.log(`hello my name is ${name} and my reposount is ${repocount}`)  // its called stringinterpolation

const gameName = new String("anand-bx-com")

console.log(gameName[0])

console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))

console.log(gameName.indexOf('d'))

const newString = gameName.substring(0,4)

console.log(newString)

const anotherString = gameName.slice(-9,1)

console.log(anotherString)

const newString1 = "   anand bhaskar  "

console.log(newString1)
console.log(newString1.trim()) //there is trimstart and trim end tooo but  we use trim for both purpose

const url="https://anand.com/anand%20bhaskar"

console.log(url.replace('%20','-'))

console.log(url.includes('anand'))

console.log(gameName.split('-'))

