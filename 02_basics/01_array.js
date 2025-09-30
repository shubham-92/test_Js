const myArr = [0,1,2,3,4,5] //resizable ,mix data types, shallow copy(by ref)

const myHeroes =["ironman","batman"]

const myArr2=new Array(1,2,3,4,5)

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //exclude the range doest effect the array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //it includes the range and also remove from the arr
console.log("C ", myArr);
console.log(myn2);