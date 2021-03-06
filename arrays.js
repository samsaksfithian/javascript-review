/* 
	filter -- always returns array of equal or fewer elements
	map -- returns array of same number of elements
	sort -- returns array of same size
	reduce -- returns just one element

	pop
	push

	some -- returns bool
	every -- returns bool

	find -- returns number index
	findIndex -- returns number index

	spread

*/

const dogs = ['yorkshire', 'golden retriever', 'husky', 'aussie', 'german shepherd', 'Snoop', 'frenchie', 'pitbull'];
console.log(dogs);

// ===========================================
// Pop/Push

console.log('\nPop:');
console.log(dogs.pop());
console.log(dogs);

console.log('\nPush:');
console.log(dogs.push('maltese'));
console.log(dogs);

// ===========================================
// Shift/Unshift

console.log('\nShift/Unshift');
console.log(dogs.shift());
console.log(dogs.unshift('chow chow'));

// ===========================================
// Splice
console.log('\nSplice:');
const dogs3 = ['yorkshire', 'golden retriever', 'husky', 'aussie', 'german shepherd', 'Snoop', 'frenchie', 'pitbull'];;
console.log(dogs3.splice(2, 3));
console.log(dogs3);

// ===========================================
// ForEach
console.log('\nForEach:');
dogs.forEach(dog => {
	console.log(dog);
});

// ===========================================
// Filter
console.log('\nFilter:');
const dogs2 = dogs.filter((dog) => {
	// return dog.length > 6; // long names
	return dog.split(' ').length > 1; // multiple words
});
console.log(dogs2);

// ===========================================
// Map
console.log('\nMap:');
const modifiedDogs = dogs.map(dog => {
	return dog.toUpperCase()
});
console.log(modifiedDogs);

// ===========================================
// Combine
console.log('\nCombine:');
const modifiedDogs2 = dogs
						.filter( (dog) => dog.indexOf(' ') != -1 )
						.map( dog => dog.toUpperCase() );
console.log(modifiedDogs2);

// ===========================================
// Reduce
console.log('\nReduce:');
const modifiedDogs3 = dogs.reduce( (accum, dog) => {
	return accum + dog.length;
}, 0 );
// acc: 0
// 0 + 9 (len of 'yorkshire', the first element) -> acc: 9
// 9 + 14 (len of 'golden retriever', the next element) -> acc: 23
// etc
console.log(modifiedDogs3);

const modifiedDogs4 = dogs.reduce( (accum, dog) => {
	return accum + dog;
}, '');
console.log(modifiedDogs4);

// ===========================================
// Spread
console.log('\nSpread:');
const moreDogs = [...dogs, 'collie'];
console.log(moreDogs);

function listSomeDogs(dog1, dog2, dog3){
	console.log(dog1, dog2, dog3);
}
listSomeDogs(...dogs);

const modifiedDogs5 = dogs.reduce( (accum, dog) => {
	return [...accum, dog];
}, []);
console.log(modifiedDogs5);

// ===========================================
// Sort
console.log('\nSort:');
const dogs4 = dogs.sort((lhs, rhs) => {
	return lhs.length < rhs.length ? -1 : 1;
});
console.log(dogs4);

const dogs5 = dogs.sort(); // default sorts lexographically
console.log(dogs5);

// ===========================================
// Some/Every
console.log('\nSome/Every:');
const doesExist = dogs.some(dog => {
	return dog === 'aussie';
	// 9 == '9' -> returns true
	// 9 === '9' -> returns false
});
console.log(doesExist);
const doesExist2 = dogs.some(dog => {
	return dog.length > 3;
});
console.log(doesExist2);

const allExist = dogs.every(dog => (dog.length > 5) );
console.log(allExist);


