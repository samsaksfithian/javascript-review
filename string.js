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

const words = puppy.split(' '); // [ 'golden', 'retriever' ]
console.log(words);

const [one, two, three] = [ 'golden', 'retriever' ]
console.log(one, "and", two, "and", three);

const words2 = puppy.split('e'); // [ 'gold', 'n r', 'tri', 'v', 'r' ]
const newpuppy = words.join('e');// 'gold' + "e" + 'n r' + "e" + 'tri' + "e" + 'v' + "e" + 'r' ]
console.log(words2);
console.log(newpuppy);

const puppy2 = 'golden    retriever   is      cool';
const words3 = puppy2.split(/ +/);
const newpuppy2 = words3.join(' ');
console.log('\n', puppy2);
console.log(words3);
console.log(newpuppy2);

