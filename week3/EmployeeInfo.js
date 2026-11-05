function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}

// Display current date and time
const currentDateTime = new Date();

console.log("This is my first program");
console.log("Program run on : " + currentDateTime.toLocaleString());

var EmpName = "John";
var EmpSalary = 50000;

// Calling the function
EmployeeInfo(EmpName, EmpSalary);