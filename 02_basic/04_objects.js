//this whole thing is a non-singleton object

const Trinderuser = {} //this creates the empty objects
Trinderuser.id="123abc" //.id here helps to use add this values in a objects
Trinderuser.name="Aryan" //same with .name
Trinderuser.isLoggedIn = false //same with isLoggedIn
 //console.log(Trinderuser);


 //This was to create the multiple objects in a single object
const regularUser = {
    email: "Aryan2gmail.com",
    FullName: {
        UserFullName:{
            FirstName: "Aryan",
            LastName: "Tiwari"
        }
    }
}
console.log(regularUser.FullName.UserFullName);

//To combine Two objects (just like an array)
const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "A", 4: "B"}

const obj3 = {...obj1, ...obj2} //this is know as spread operator
console.log(obj3);

//upper dekh sakta h to combine to objects with the help of spread operator

const Multiple = [ 
 {
    id: 123,
    name: "aryan"
},
{
    id: 123,
    name: "aryan"
},
{
    id: 123,
    name: "aryan"
},
]
users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser)); //this will show datatypes such as array, objects etc
 console.log(Object.values(tinderUser)); //this will display the values of array and objects
console.log(Object.entries(tinderUser));
