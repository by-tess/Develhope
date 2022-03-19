const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);     
      if (person) {
        return resolve(person);
      }
      return reject(`The person with id number ${id} does not exist`);
    }, 1000);
  });
}

let promise = fetchPersonById(4);
promise
.then((id) => {
  console.log(id);
})
.catch((err) => {
  console.error(err)
});