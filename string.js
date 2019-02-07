/*
    template strings
    
    length
    indexOf
    replace
    substring
    subst
*/

const puppy = "golden retriever";

console.log(puppy.length);

console.log(puppy.indexOf('e'));
console.log(puppy.indexOf('e', 7));

// does not modify puppy
const doggie = puppy.replace('golden', 'labrador');
const doggie2 = puppy.replace('o', 'labrador');
console.log(doggie);
console.log(doggie2);

const color = puppy.slice(0, 6); // selects characters [0,6)
const color4 = puppy.slice(7, -1);
console.log(color);
console.log(color4);

const color2 = puppy.substring(0, 6); // alias of slice, does same thing
console.log(color2);

const color3 = puppy.substr(7, 5); // starts at a point and does a length, instead of start and end
console.log(color3);

const words = puppy.split(' ');
console.log(words);



