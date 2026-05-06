//there are 2 types of memory 
//Stack(Primitive) and Heap(Non-Primitive) memory

let myYoutubeName = "ASKTeam" //original stack
let anotherName = myYoutubeName //duplicate stack
anotherName = "All in ONE" //dupilcate value
console.log(anotherName); //duplicate copy
console.log(myYoutubeName); //original copy

let userOne = {
    email: "xyz@.com",
    upi: "user@sbi"
} // original value in heap mempryu
let userTwo = userOne //userTwo will reference from the heap memory
userTwo.email = "aryan@google.com" //reference from the heap memory
console.log(userOne.email) //checking
console.log(userTwo.email); //chechking