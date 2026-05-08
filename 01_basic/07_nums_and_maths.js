//********Nums********* */
const number = 100
console.log(number);
const balance = new Number(100)
console.log(balance.toFixed(1)); //this will help you while buidling the e-commerce website for carting and all
const anotherString = 124.9875
console.log(anotherString.toPrecision(3)); // important
const secondOne = 10000000
console.log(secondOne.toLocaleString()); // this will provide you the comas in larger numbers
//*************Maths *****************//
console.log(Math.abs(-4));//-4 ko positive value mai convert kar dega
console.log(Math.round(4.6)); //Round off any decimal value
//most important method 
console.log(Math.random()) // it will always pass the value from 0 to 1
console.log((Math.random()*10) + 1) //we want number till 10 and +1 is to avoid 0
console.log(Math.floor(Math.random()*10) + 1) //now here it is same as above but the difference is math.floor it take the value of lower number

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) +min);
//now above what happens is we have multiple by (max-min+1) as you know +1 for avoiding zero and max-min is the range by which number you want in what range so it will give 10 ranges number and +min to avoid that 


