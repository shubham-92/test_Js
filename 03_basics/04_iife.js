// Immediately Invoked Function Expressions (IIFE)

(function Chai (){
    //named iife
    console.log("DB connected")
})();

((name) => {
    console.log(`DB connected ${name}`)
})("mongoDb")

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it's defined.
//  It's primarily used to create a private scope for variables, preventing them from polluting the global environment.


// code execution
// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   when the function s are called,it creates a memory phase and execution phase for the function 
//   just like the main one.