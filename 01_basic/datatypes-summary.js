// primitive datatypes
// 7 types = string, number, boolean, null, undefined, sysmbol(unique value), BigInt


const value = 100
const numberValue = 100.5

const isLoggedIn = false
const outsideTemp = null

let userMail;

const id = Symbol('123') //Symbol datatype
const anotherId = Symbol('123') //above value and this value will be different

const BigNumber = 7644353n //bigint datatype




//non-primitive datatypes(reference type)

//arrays, objects, functions


//array
const heros = ["flyingjatt", "doga", "naagraj"];
//objects will be in key-value paris
let myObj = {
    name: "aryan",
    age: 17,
}
//functions
const myFunction = function(){
    console.log("hello");
}
console.log(typeof myFunction);
