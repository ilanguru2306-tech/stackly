/* ---------- FOR LOOP ---------- */

// Task 1
console.log("Task 1:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2
console.log("Task 2:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Task 3
console.log("Task 3:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Task 4
console.log("Task 4:");
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// Task 5
console.log("Task 5:");
let n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}

/* ---------- WHILE ---------- */

// Task 6
console.log("Task 6:");
let c1 = 10;
while (c1 >= 1) {
  console.log(c1);
  c1--;
}

// Task 7
console.log("Task 7:");
let sum = 0;
let i7 = 1;
while (i7 <= 10) {
  sum += i7;
  i7++;
}
console.log(sum);

/* ---------- DO WHILE ---------- */

// Task 8
console.log("Task 8:");
let i8 = 1;
do {
  console.log(i8);
  i8++;
} while (i8 <= 5);

// Task 9
console.log("Task 9:");
let a9 = 10;
do {
  console.log(a9);
  a9++;
} while (a9 <= 5);

/* ---------- FOR OF ---------- */

// Task 10
console.log("Task 10:");
let name10 = "javascript";
for (let ch of name10) {
  console.log(ch);
}

// Task 11
console.log("Task 11:");
let fruits11 = ["apple", "orange", "banana", "mango", "grapes"];
for (let f of fruits11) {
  console.log(f);
}

// Task 12
console.log("Task 12:");
let students12 = ["Arun", "Priya", "Naveen", "Divya", "Karthik"];
for (let s of students12) {
  console.log(`Student: ${s}`);
}

/* ---------- FOR IN ---------- */

// Task 13
console.log("Task 13:");
let employee13 = { name: "Arun", age: 25, role: "Developer", city: "Chennai" };
for (let key in employee13) {
  console.log(key, employee13[key]);
}

// Task 14
console.log("Task 14:");
let product14 = {
  productName: "Laptop",
  price: 55000,
  brand: "Dell",
  category: "Electronics",
  stock: 10
};
for (let key in product14) {
  console.log(key, product14[key]);
}

/* ---------- FUNCTIONS ---------- */

// Task 15
console.log("Task 15:");
function welcome15() {
  console.log("Welcome to JavaScript");
}
welcome15();
welcome15();
welcome15();

// Task 16
console.log("Task 16:");
function greet16(name) {
  console.log(`Hello ${name}`);
}
greet16("Naveen");
greet16("Arun");
greet16("Priya");

// Task 17
console.log("Task 17:");
function student17(name, age, department) {
  console.log(name, age, department);
}
student17("Arun", 25, "IT");
student17("Priya", 24, "HR");
student17("Naveen", 22, "Finance");

/* ---------- RETURN ---------- */

// Task 18
console.log("Task 18:");
function add18(a, b) {
  return a + b;
}
let result18 = add18(10, 20);
console.log(result18);

// Task 19
console.log("Task 19:");
function salary19(amount) {
  return amount;
}
let mySalary = salary19(45000);
console.log(mySalary);

// Task 20
console.log("Task 20:");
function bonus20(salary, bonusAmount) {
  return salary + bonusAmount;
}
console.log("Total =", bonus20(50000, 5000));

/* ---------- DEFAULT PARAMETER ---------- */

// Task 21
console.log("Task 21:");
function employee21(name, role = "Developer") {
  console.log(name, role);
}
employee21("Arun");
employee21("Priya", "Designer");

/* ---------- FUNCTION TYPES ---------- */

// Task 22
console.log("Task 22:");
function square22(number) {
  return number * number;
}
console.log(square22(1));
console.log(square22(2));
console.log(square22(3));
console.log(square22(4));
console.log(square22(5));

// Task 23
console.log("Task 23:");
let calculate23 = function (a, b) {
  return a + b;
};
console.log(calculate23(10, 15));

// Task 24
console.log("Task 24:");
let multiply24 = (a, b) => {
  return a * b;
};
console.log(multiply24(4, 5));

/* ---------- SCOPE ---------- */

// Task 25
console.log("Task 25:");
function test25() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
  }
  console.log(a); // var leaks out of the block
  // console.log(b); // ReferenceError: b is not defined (block-scoped)
  // console.log(c); // ReferenceError: c is not defined (block-scoped)
}
test25();

/* ---------- HOISTING ---------- */

// Task 26
console.log("Task 26:");
console.log(a26);
var a26 = 10;
// Output: undefined (declaration is hoisted, assignment is not)

// Task 27 & 28 need their own scope to avoid crashing the whole file
console.log("Task 27:");
try {
  eval("console.log(b27); let b27 = 20;");
} catch (e) {
  console.log(e.name + ":", e.message);
}
// ReferenceError: Cannot access 'b27' before initialization (temporal dead zone)

console.log("Task 28:");
try {
  eval("console.log(c28); const c28 = 30;");
} catch (e) {
  console.log(e.name + ":", e.message);
}
// ReferenceError: Cannot access 'c28' before initialization (temporal dead zone)

/* ---------- IIFE ---------- */

// Task 29
console.log("Task 29:");
(function () {
  console.log("Welcome to JavaScript");
})();

(function (product, discount) {
  console.log(`${product} has a discount of ${discount}%`);
})("Laptop", 10);

/* ---------- CALLBACK / HIGHER-ORDER FUNCTION ---------- */

// Task 30
console.log("Task 30:");
function welcome30() {
  console.log("Welcome");
}
function execute30(callback) {
  callback();
}
execute30(welcome30);

/* ---------- GENERATOR ---------- */

// Task 31
console.log("Task 31:");
function* cashback31() {
  yield "10% cashback";
  yield "20% cashback";
  yield "30% cashback";
  yield "Better luck next time";
}
let cashbackGen = cashback31();
for (let value of cashbackGen) {
  console.log(value);
}

/* ---------- FINAL MINI PROJECT ---------- */

console.log("Task 32:");
let employees = [
  { name: "Arun", age: 25, department: "IT", role: "Developer", salary: 40000 },
  { name: "Priya", age: 24, department: "HR", role: "HR Executive", salary: 35000 }
];

// 1. for...of - print every employee
for (let emp of employees) {
  console.log(emp);
}

// 2. for...in - print each employee's keys and values
for (let emp of employees) {
  for (let key in emp) {
    console.log(key, emp[key]);
  }
}

// 3 & 4. Function with parameters to display employee info
function displayEmployee(emp) {
  console.log(`${emp.name} | ${emp.age} | ${emp.department} | ${emp.role} | ${emp.salary}`);
}
for (let emp of employees) {
  displayEmployee(emp);
}

// 5. Function that returns an employee's salary
function getSalary(emp) {
  return emp.salary;
}
console.log("Arun's salary:", getSalary(employees[0]));

// 6. Condition - check salary >= 40000
for (let emp of employees) {
  if (emp.salary >= 40000) {
    console.log(`${emp.name} qualifies for high salary bracket`);
  } else {
    console.log(`${emp.name} does not qualify`);
  }
}

// 7. Arrow function for a simple calculation (annual salary)
let getAnnualSalary = (emp) => emp.salary * 12;
console.log("Priya's annual salary:", getAnnualSalary(employees[1]));

// 8. Generator producing employee benefits
function* benefits() {
  yield "Medical Insurance";
  yield "Transport";
  yield "Food Allowance";
  yield "Bonus";
}
for (let b of benefits()) {
  console.log(b);
}