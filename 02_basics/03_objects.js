// An object in JavaScript is a non-primitive data
//  type that allows you to store collections of 
// keyed data and more complex entities. 
// It's essentially a container for properties, 
// where each property has a name (key) and
//  a value


//constructor=>singleton  object.create
// literals=>not singleton


//object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "Shubham",
    "full name": "Shubham Singh jalwal",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "shubham@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser["name"])
// console.log(JsUser[mySym])
// console.log(JsUser.email)
// console.log(JsUser["email"])

JsUser.email="ssj@gmail.com"

JsUser.greeting=function(){
    console.log("hallow Js user!")
}

JsUser.greetingTwo=function(){
    console.log(`hallow Js user ${this["full name"]}`) //this.full name can be used also
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

console.log(JsUser)
