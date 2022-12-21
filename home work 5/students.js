const students=['Misha','Alina','Pasha','Natasha','Marsel','Larisa','Andrii','Lida','Nina','Victor'];

students.push('Linda','Ivan');
console.log(students);

students.unshift('Olenka','Kira');
console.log(students);

students.pop();
console.log(students);

students.shift();
console.log(students);

// const name = prompt('write name');
// console.log(students.includes(name));

const newStudents=students.slice(3,7);
console.log(newStudents);

const newGroup=['Tany','Hady','linda','Adam','Kiril'];
const together=newGroup.concat(newStudents);
console.log(together);

together.splice(4,1 );
console.log(together);

together.splice(6,1,'Іван');
console.log(together.join('-'));


