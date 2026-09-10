/*: STUDENT RESULT ANALYZER ---------- */
console.log("Task 1:");
function analyzeResult(name, department, m1, m2, m3, m4, m5) {
  const total = m1 + m2 + m3 + m4 + m5;
  const average = total / 5;
  const passFail = [m1, m2, m3, m4, m5].every(m => m >= 35) ? "Pass" : "Fail";

  let grade;
  if (average >= 90) grade = "A";
  else if (average >= 75) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 50) grade = "D";
  else grade = "Fail";

  console.log("Name:", name);
  console.log("Department:", department);
  console.log("Total:", total);
  console.log("Average:", average);
  console.log("Result:", passFail);
  console.log("Grade:", grade);
}
analyzeResult("Arun", "IT", 85, 90, 78, 88, 95);


/* EMPLOYEE SALARY CALCULATOR ---------- */
console.log("\nTask 2:");
let employee = { name: "guru", role: " software Developer", salary: 55000, experience: 1 };

function calculateSalary(employee) {
  let bonusPercent = 0;
  if (employee.experience >= 5) bonusPercent = 15;
  else if (employee.experience >= 2) bonusPercent = 10;

  const bonus = (employee.salary * bonusPercent) / 100;
  const finalSalary = employee.salary + bonus;

  console.log("Basic Salary:", employee.salary);
  console.log("Bonus %:", bonusPercent);
  console.log("Bonus Amount:", bonus);
  console.log("Final Salary:", finalSalary);
  return finalSalary;
}
calculateSalary(employee);


/* : PRODUCT FILTER SYSTEM ---------- */
console.log("\nTask 3:");
let products = [
  { name: "Laptop", price: 55000, category: "electronics" },
  { name: "Mouse", price: 800, category: "electronics" },
  { name: "Shirt", price: 1200, category: "fashion" },
  { name: "Shoes", price: 2500, category: "fashion" },
  { name: "Phone", price: 30000, category: "electronics" }
];

console.log("Above ₹2000:", products.filter(p => p.price > 2000));
console.log("Electronics only:", products.filter(p => p.category === "electronics"));
console.log("First below ₹1000:", products.find(p => p.price < 1000));
console.log("Total price:", products.reduce((sum, p) => sum + p.price, 0));
console.log("Any above ₹50000:", products.some(p => p.price > 50000));
console.log("Every price above ₹500:", products.every(p => p.price > 500));


/: EMPLOYEE MANAGEMENT ---------- */
console.log("\nTask 4:");
let employees4 = [
  { id: 101, name: "meenu", role: "Frontend Developer", salary: 50000 },
  { id: 102, name: "guru", role: "Backend Developer", salary: 42000 },
  { id: 103, name: "jai", role: "UI/UX Designer", salary: 45000 },
  { id: 104, name: "giri", role: "Tester", salary: 72000 },
  { id: 105, name: "hari", role: "DevOps Engineer", salary: 45000 },
  { id: 106, name: "taha", role: "Project Manager", salary: 20000 }
];

console.log("All names:", employees4.map(e => e.name));
console.log("Above ₹40000:", employees4.filter(e => e.salary > 40000));
console.log("ID 103:", employees4.find(e => e.id === 103));
console.log("Total salary:", employees4.reduce((sum, e) => sum + e.salary, 0));
console.log("Highest paid:", employees4.reduce((max, e) => e.salary > max.salary ? e : max));
console.log("Sorted high->low:", [...employees4].sort((a, b) => b.salary - a.salary).map(e => e.name));
console.log("Names only array:", employees4.map(e => e.name));


/*: SHOPPING CART ---------- */
console.log("\nTask 5:");
let cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {
  const itemTotals = cart.map(item => ({ name: item.name, itemTotal: item.price * item.quantity }));
  console.log("Item totals:", itemTotals);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log("Cart total:", cartTotal);

  const discount = cartTotal > 50000 ? cartTotal * 0.10 : 0;
  console.log("Discount:", discount);

  const finalAmount = cartTotal - discount;
  console.log("Final payable amount:", finalAmount);
  return finalAmount;
}
calculateCart(cart);


/*: STUDENT SEARCH SYSTEM ---------- */
console.log("\nTask 6:");
let students6 = [
  { name: "meenu", age: 23, mark: 85 },
  { name: "guru", age: 20, mark: 92 },
  { name: "jaya", age: 21, mark: 67 },
  { name: "giri", age: 29, mark: 45 }
];

console.log("All names:", students6.map(s => s.name));
console.log("Above 80:", students6.filter(s => s.mark > 80));
console.log("Find Priya:", students6.find(s => s.name === "meenu"));
console.log("Average mark:", students6.reduce((sum, s) => sum + s.mark, 0) / students6.length);
console.log("Anyone failed (< 40):", students6.some(s => s.mark < 40));
console.log("Everyone above 40:", students6.every(s => s.mark > 40));
console.log("Sorted by marks:", [...students6].sort((a, b) => a.mark - b.mark).map(s => s.name));


/*: ARRAY TRANSFORMATION CHALLENGE ---------- */
console.log("\nTask 7:");
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

console.log("Doubled:", numbers.map(n => n * 2));
console.log("Even numbers:", numbers.filter(n => n % 2 === 0));
console.log("Greater than 15:", numbers.filter(n => n > 15));
console.log("First > 20:", numbers.find(n => n > 20));
console.log("Total:", numbers.reduce((sum, n) => sum + n, 0));
console.log("Any > 40:", numbers.some(n => n > 40));
console.log("Every positive:", numbers.every(n => n > 0));
console.log("Sorted high->low:", [...numbers].sort((a, b) => b - a));


/*: STRING ANALYZER ---------- */
console.log("\nTask 8:");
function analyzeSentence(sentence) {
  console.log("Total characters:", sentence.length);
  console.log("Uppercase:", sentence.toUpperCase());
  console.log("Lowercase:", sentence.toLowerCase());
  console.log('Contains "JavaScript":', sentence.includes("JavaScript"));
  console.log("First character:", sentence.slice(0, 1));
  console.log("Last character:", sentence.slice(-1));
  console.log("Number of words:", sentence.split(" ").length);
  console.log("Replaced:", sentence.replace("JavaScript", "Python"));
  console.log("As array:", sentence.split(" "));
}
analyzeSentence("JavaScript is very powerful");