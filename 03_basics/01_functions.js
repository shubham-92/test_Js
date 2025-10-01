function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");

}

// sayMyName =>refrence
//sayMyName() => execution

//
//console.log(sayMyName())

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ //default but can be overwrite by new call
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(...num1){ //now ... work as rest funct 
    return num1
}


function calculateCartPrice(val1,val2,...num1){ //1st elem goes to val1 next to val2, baki in num1
    return num1
}
console.log(calculateCartPrice(200,100,125,750))



const user = {
    username: "laptop",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));