function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}

const currentDateTime = new Date();

console.log("This is my first program");
console.log("Program run on : " + currentDateTime.toLocaleString());

var EmpName = "John";
var EmpSalary = 50000;

EmployeeInfo(EmpName, EmpSalary);

const EmpSkills = (skills, Name, LabGrp) => {
    console.log("Student ID " + Name + " Expert in " + skills);
    console.log("Lab Group Name " + LabGrp);
};

EmpSkills("Java", "233333003", "Thursday Group");


const student = require('./StudentInfo');
const person = require('./Person');

console.log("Student Name: " + student.getName());
console.log(student.Location());
console.log(student.dob);
console.log("Grade is " + student.Studentgrade(55));

const person1 = new person("Jim", "USA", "myemail@gmail.com");

console.log("Using Person Module", person1.getPersonInfo());

console.log("Program ended");