/* - VARIABLES ---------- */
// Task 1 — var, let, const
var studentName = "guru";
let studentAge = 23;
const collegeName = "SRM College";

console.log(studentName);   // guru
console.log(studentAge);    // 23
console.log(collegeName);   // SRM College

studentName = "meena";      // reassigning var — allowed
console.log(studentName);   // meena

studentAge = 21;            // reassigning let — allowed
console.log(studentAge);    // 21

var studentName = "nova";   // redeclaring var — allowed, no error
console.log(studentName);   // nova


/* ------ DATA TYPES --------- */
let t1 = "hwyyyy";
let t2 = 100;
let t3 = 25.5;
let t4 = true;
let t5 = false;
let t6;        // undefined

console.log(typeof t1); // string
console.log(typeof t2); // number
console.log(typeof t3); // number
console.log(typeof t4); // boolean
console.log(typeof t5); // boolean
console.log(typeof t6); // undefined

const student = {
  name: "guru",
  age: 23,
  city: "chennai",
  qualification: "B.com",
  isStudent: true
};

console.log(student);
// { name: 'guru', age: 23, city: 'chennai', qualification: 'B.com', isStudent: true }
console.log(student.name);          // guru
console.log(student.age);           // 23
console.log(student.qualification); // B.com
console.log(student.isStudent);     // true

// Task 7 — Fruit Array
const fruits = ["pineapple", "Mango", "watermelon", "kiwi", "cherry", "shraberry"];

console.log(fruits[0]);               // pineapple
console.log(fruits[1]);               // Mango
console.log(fruits[fruits.length - 1]); //watermelon
console.log(fruits.length);           // 6


/* ----- ARITHMETIC OPERATORS ------- */
let a = 20;
let b = 5;
console.log(a + b);  // 25
console.log(a - b);  // 15
console.log(a * b);  // 100
console.log(a / b);  // 4
console.log(a % b);  // 0
console.log(a ** b); // 3200000


let shirt = 599;
let pant = 2299;
let shoes = 5999;
let total = shirt + pant + shoes;
console.log("Total =", total); 

let tamil = 45, english = 85, maths = 70;
let totalMarks = tamil + english + maths;
let avgMarks = totalMarks / 3;
console.log("Total Marks:", totalMarks);   
console.log("Average Marks:", avgMarks);   


/* --- INCREMENT & DECREMENT ---------- */

let x1 = 10;
let y1 = x1++;
console.log(x1); // 11
console.log(y1); // 10

// — Pre Increment
let x2 = 10;
let y2 = ++x2;
console.log(x2); // 11
console.log(y2); // 11

//  — Post Decrement
let x3 = 20;
let y3 = x3--;
console.log(x3); // 19
console.log(y3); // 20

// Task 14 — Pre Decrement
let x4 = 20;
let y4 = --x4;
console.log(x4); // 19
console.log(y4); // 19


/* ----: CHALLENGE ------- */
let p = 5;
let q = p++;   // q = 5, p = 6
let r = ++p;   // p = 7, r = 7
let s = q--;   // s = 5, q = 4
console.log(p); // 7
console.log(q); // 4
console.log(r); // 7
console.log(s); // 5

// ..........Assignment Operators
let num = 10;
num += 5;   console.log(num); 
num -= 6;   console.log(num); 
num *= 8;   console.log(num); 
num /= 2;   console.log(num); 
num %= 4;   console.log(num); 
num **= 7;  console.log(num);


/* ---- MINI PROJECTS -------- */

// Task 17 — Mini Student Profile
const name17 = "guru";
const age17 = 23;
const city17 = "chennai";
const college17 = "SRM College";
const subjects17 = ["Tamil", "English", "Maths", "Science", "Social"];

const profile = {
  name: name17,
  age: age17,
  city: city17,
  subjects: subjects17,
  isStudent: true
};

console.log(profile.name);                                   // guru
console.log(profile.age);                                    // 23
console.log(profile.city);                                   // chennai
console.log(profile.subjects[0]);                             // Tamil
console.log(profile.subjects[profile.subjects.length - 1]);   // Social
console.log(profile.subjects.length);                         // 5
console.log(profile);
// { name: 'guru', age: 23, city: 'chennai',
//   subjects: [ 'Tamil', 'English', 'Maths', 'Science', 'Social' ],
//   isStudent: true }


let numA = 20;
let numB = 4;

console.log("Addition:", numA + numB);       // Addition: 24
console.log("Subtraction:", numA - numB);    // Subtraction: 16
console.log("Multiplication:", numA * numB); // Multiplication: 80
console.log("Division:", numA / numB);       // Division: 5
console.log("Modulus:", numA % numB);        // Modulus: 0
console.log("Power:", numA ** numB);         // Power: 160000