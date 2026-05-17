//arrays:-arrayn object type designed for storing data collections.
const myArr = [0,1,2,3,4,5,]
const myHeros = ["flyingjatt","batman","superman","spiderman"]
console.log([0])//accessing array element
//array methods
myArr.push(6)//add the element in the arrary
console.log(myArr) // it will print the array from 0 to 6


myArr.pop()//remove the last element from the array
console.log(myArr) // it will print the array from 0 to 5


myArr.unshift(9)//add the element in the start of the array it will behave as push but it will add the element in the start of the array
console.log(myArr) // it will print the array from 9 to 5


myArr.shift()//remove the first element from the array it will behave as pop but it will remove the first element from the array
console.log(myArr) // it will print the array from 0 to 5

console.log(myArr.includes(5))//it will check the element is present in the array or not it will return true or false


console.log(myArr.indexOf(3))//it will return the index of the element in the array if the element is present in the array otherwise it will return -1

const newArr = myArr.join()
console.log(newArr) // it will convert the array into a string and it will return the string
console.log(typeof newArr) // it will return the type of the variable newArr which is string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);