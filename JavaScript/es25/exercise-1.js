const person = {

  getFirstName: function() {
    return this.firstName;
  },
  setFirstName: function(firstName) {
    this.firstName = firstName;
  },
  getLastName: function() {
    return this.lastName;
  },
  setLastName: function(lastName) {
    this.lastName = lastName;
  },

  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';

const simon = Object.create(person);
simon.firstName = 'Simon';
simon.lastName = 'Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins