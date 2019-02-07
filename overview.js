/*
    OVERVIEW

    variables: let and const
    all the normal things you'd expect from a language: math, logic
    ternary operator
    no explicit types
    functions as variables, callbacks
    timeouts

*/

// const dog = 10;
let cat = 10;
// cat = 12;

// console.log(dog + cat);


const dogs = ['yorkshire', 'golden'];
dogs.push('husky');
dogs.push('Snoop');

console.log(dogs);

const good = true;
const bad = false;
if(good && !bad){
    console.log('good');
}

// Ternary: condition ? runs if true : runs if false
good && bad ? console.log('good') : console.log('bad');

console.log("");

function bark(dogName) {
    // const myString = dogName + ' says woof!';
    const myString2 = `${dogName} says woof!`;
    // const myString3 = `${false ? 'puppy' : 'kitty'} says woof!`
    // console.log(myString);
    console.log(myString2);
    // console.log(myString3);
    
}

const bark2 = function(dogName){
    const otherString = dogName + "'s code";
    const anotherOtherString = 'Andrew\'s code 2';
    const aThirdString = `Andrew's code says "woof"`;
    console.log(otherString);
    console.log(anotherOtherString);
    console.log(aThirdString);
}

// for (let i = 0; i < 4; i++) {
//     setTimeout( function(){ bark(dogs[i]) }, 1500);
// }
for (let i = 0; i < 4; i++) {
    setTimeout(() => {
        bark(dogs[i])
    }, 1200);
}
for (let i = 0; i < 4; i++) {
    setTimeout( bark, 1250, dogs[i]);
}

function wrapper(callbackFunc){
    callbackFunc(dogs[2]);
}


bark(dogs[0]);
console.log("");
bark2(dogs[1]);
console.log("");
wrapper(bark);

console.log('');
setTimeout( function(){console.log('Wait for me!')} , 1350);
console.log("I won't wait!\n");

for (let i = 0; i < 10; i++) {
    console.log(`Loop ${i}`);
    setTimeout( function(){console.log(`${i}: Pls wait for me!`)} , 1400);
}

for (var i = 0; i < 10; i++) {
    setTimeout( function(){console.log(`I'm ${i}`)} , 1500);
}
