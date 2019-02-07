/*
	creating an object
	destructurings

	for in

	constructors

	prototype
*/

const puppy = {}; //empty object
puppy.name = 'Geraldine';
puppy.breed = "golden retriever";
puppy.age = 3;
puppy["color"] = 'golden';
puppy['has-shots'] = true;
console.log(puppy);
console.log('');

const puppy2 = { 
	name: 'Jeff',
	breed: 'labrador',
	age: 5,
	color: 'chocolate',
	'has-shots': true,
	favoriteFoods: ['kibble', 'bones'],
	owner: {
		name: 'Ivy',
		occupation: 'code ninja',
	},
	bark: function() {
		console.log(`${this.name} says 'woof'!`);
	}
};
puppy2.bark();
console.log(puppy2);

// ===========================================
// For In
console.log('\nFor In:');
for (const key in puppy2) {
	if (puppy2.hasOwnProperty(key)) {
		const element = puppy2[key];
		console.log(key, typeof(element));
	}
}

// ===========================================
// Destructuring
console.log('\nDestructuring:');
const { name, owner } = puppy2;
console.log(name);
console.log(owner.occupation);

// ===========================================
// Constructors
console.log('\nConstructors:');
function Puppy(name, age, breed = 'Dog') {
	this.name = name;
	this.age = age;
	this.breed = breed;
}
const jeff = new Puppy('Jeff', 5, 'Labrador');
const frankie = new Puppy('Frankie', 3, 'Golden Retriever');
const buddy = new Puppy('Buddy', 10, 'German Shepherd');
const lucy = new Puppy('Lucy', 4);
console.log(jeff.name, frankie.name, buddy.name, lucy.name);
console.log(jeff);
console.log(lucy);

// ===========================================
// Prototypes/Altering Constructors
console.log('\nPrototypes/Altering Constructors:');
Puppy.prototype.height = 3;
jeff.height = 5;
console.log(jeff.height, frankie.height);
console.log(jeff);
console.log(frankie);

// ===========================================
// Class
console.log('\nClass:');
class PuppyClass {
	constructor(name, age, breed) {
		this.name = name;
		this.age = age;
		this.breed = breed;
	}

	bark() {
		console.log(`${this.name} says 'woof'!`);
	}
}

const geraldine = new PuppyClass('Geraldine', 6, 'Yorkshire');
console.log(geraldine.name);
console.log(geraldine);

