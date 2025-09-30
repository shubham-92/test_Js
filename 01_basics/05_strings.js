const name ="shubham"

const repoCount=3
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('shubham-ssj-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
//console.log(newString);

const anotherString = gameName.slice(-15, 4)
//console.log(anotherString);

const spaceString="     shubham    jalwal"

console.log(spaceString)
console.log(spaceString.trim())

const url="https://google.com%20find=javascript"

console.log(url.replace('find','search'))
console.log(url.includes('shubham'))
console.log(gameName.split('-'))

