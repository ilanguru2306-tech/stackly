/* FINAL MINI PROJECT ---------- */
console.log("Task 32:");
let employees = [
  { name: "guru", age: 25, department: "IT", role: "Developer", salary: 50000 },
  { name: "meenu", age: 24, department: "HR", role: "HR Executive", salary: 45000 }
];
for (let emp of employees) {
  console.log(emp);
}
for (let emp of employees) {
  for (let key in emp) {
    console.log(key, emp[key]);
  }
}
function displayEmployee(emp) {
  console.log(`${emp.name} | ${emp.age} | ${emp.department} | ${emp.role} | ${emp.salary}`);
}
for (let emp of employees) {
  displayEmployee(emp);
}

function getSalary(emp) {
  return emp.salary;
}

console.log("guru's salary:", getSalary(employees[0]))
for (let emp of employees) {
  if (emp.salary >= 50000) {
    console.log(`${emp.name} qualifies for high salary bracket`);
  } else {
    console.log(`${emp.name} does not qualify`);
  }
}
let getAnnualSalary = (emp) => emp.salary * 12;
console.log("Priya's annual salary:", getAnnualSalary(employees[1]));

function* benefits() {
  yield "Medical Insurance";
  yield "Transport";
  yield "Food Allowance";
  yield "Bonus";
}
for (let b of benefits()) {
  console.log(b);
}