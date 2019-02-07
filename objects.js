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

console.log('\nFor In:');
for (const key in puppy2) {
	if (puppy2.hasOwnProperty(key)) {
		const element = puppy2[key];
		console.log(key, typeof(element));
	}
}

console.log('\nDestructuring:');
const { name, owner } = puppy2;
console.log(name);
console.log(owner.occupation);




