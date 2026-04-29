const accountId = 78986 //for constant value
let accountEmail = "aryan@123" // always use this 
var accountPassword = "11223344" //avoid var
accountCity="mumbai"
// accountId = 2 not allowed
accountEmail = "ayush@123"
accountPassword = "000012"
accountCity="pune"
/*
perfer not to use var
because of block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,]);
