let employees = [
  { id: 101, name: "guru", department: "IT", salary: 155000, experience: 5 },
  { id: 102, name: "meenu", department: "account", salary: 70000, experience: 3 },
  { id: 103, name: "aadhi", department: "IT", salary: 65000, experience: 2 }
];

console.log("1. Employee List:");
employees.forEach(e => console.log(e));

function searchByName(name) {
  return employees.find(e => e.name.toLowerCase() === name.toLowerCase());
}
console.log("\n2. Search 'Priya':", searchByName("Priya"));

function filterByDepartment(dept) {
  return employees.filter(e => e.department === dept);
}
console.log("\n3. IT Department:", filterByDepartment("IT"));
function filterBySalary(min) {
  return employees.filter(e => e.salary > min);
}
console.log("\n4. Earning more than ₹50,000:", filterBySalary(50000));
function totalSalary() {
  return employees.reduce((sum, e) => sum + e.salary, 0);
}
console.log("\n5. Total company salary: ₹" + totalSalary());

function highestPaid() {
  return employees.reduce((max, e) => (e.salary > max.salary ? e : max));
}
console.log("\n6. Highest paid employee:", highestPaid());

function filterByExperience(minYears) {
  return employees.filter(e => e.experience > minYears);
}
console.log("\n7. More than 3 years experience:", filterByExperience(3));

function sortBySalary(order = "asc") {
  return [...employees].sort((a, b) =>
    order === "asc" ? a.salary - b.salary : b.salary - a.salary
  );
}
console.log("\n8. Sorted Low->High:", sortBySalary("asc").map(e => e.name + ": " + e.salary));
console.log("   Sorted High->Low:", sortBySalary("desc").map(e => e.name + ": " + e.salary));

function showStatistics() {
  const total = employees.length;
  const totalSal = totalSalary();
  const highest = highestPaid().salary;
  const average = totalSal / total;

  console.log("\n9. Statistics:");
  console.log("Total Employees:", total);
  console.log("Total Salary: ₹" + totalSal);
  console.log("Highest Salary: ₹" + highest);
  console.log("Average Salary: ₹" + Math.round(average));
}
showStatistics();