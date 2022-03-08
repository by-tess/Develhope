const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName = 'Simon';

console.log(person1);
console.log(person2);

/* modificando l'oggetto person2 viene modificato anche 
l'oggetto person1 perché gli oggetti vengono copiati 
per riferimento */