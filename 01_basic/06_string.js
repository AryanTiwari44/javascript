const name = "aryan"
const valueCount = 76

//console.log(name + valueCount + "value") // this type is very outdated avoid using this 

//instead of you can you stirng interpolation using (``)this and ${}

console.log(`my name is ${name} and my weight is ${valueCount}`)
const gameName = new String("aryan") //another way to declare the string by new method and String name
//methods of strings
console.log(gameName[0])
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));
const newString = gameName.substring(0, 4) 
console.log(newString)
const anotherString = gameName.slice(-2, 4)
console.log(anotherString);
const newStringOne = "    aryan.       "
console.log(newStringOne);
console.log(newStringOne.trim()); // important method to use in your website

