const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student);
}

addStudent('Marco');
console.log(students);

/* 
la variabile students non può essere riassegnata per effetto della keyword const, 
ma i singoli elementi possono essere cambiati e possono essere aggiunti elementi all'array 
*/