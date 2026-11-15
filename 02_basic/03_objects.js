// singleton

// object literals 
//in objects its a key-value pair

const MySym = Symbol("key1") // created the symbol for an interview prepe

 const JsUser = {  
    name: "aryan",
    "Full name": "Aryan tiwari",
    [MySym]: "Mykey1", // here the symbol
    age: 20,
    location: "mumbai",
    IsLoggedIn: false,
    email: "aryan@123"
 } 
 console.log(JsUser.email);
 console.log(JsUser["Full name"]); // because in object we have declare the full name has in ("")
 console.log(typeof JsUser[MySym]); // to declare the sysmbol 
 JsUser.email = "Aryan@456" // to change the email details 
 Object.freeze(JsUser) // now you cant change the datials of Object
 JsUser.location = "delhi"
 console.log(JsUser);
 
 