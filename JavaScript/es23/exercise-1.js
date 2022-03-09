const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
const keys = Object.keys(person);

keys.forEach((key, index) => {
  console.log(`${key}: ${person[key]}`);
});