// Immediately Invoked Function Expressions (IIFE)

(function Chai (){
    //named iife
    console.log("DB connected")
})();

((name) => {
    console.log(`DB connected ${name}`)
})("mongoDb")