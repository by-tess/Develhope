const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.values
const values = Object.values(person);

values.forEach((value, index) => {
  console.log(`${value}`);
});