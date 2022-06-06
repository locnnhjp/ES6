let greetings = "lazy dog";
console.log(...greetings);
let chars = [...greetings];
console.log(chars.length);


let blog1Subscribers = ["billy@example.com", "sally@gmail.com"];
let blog2Subscribers = ["timmy@gmail.com", "tammy@example.com", "tommy@gmail.com"];
let subscribes = [...blog1Subscribers, ...blog2Subscribers];
console.log(subscribes);

let students = ["John", "Sofia", "Bob"];
let copy_students = students;
console.log(students);
console.log(copy_students);

students.push("Sally");
console.log(students);
console.log(copy_students);
