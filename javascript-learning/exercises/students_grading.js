const points = 100;
const fullName = "Andrea Nová";
let grade;

if (points >= 90) {
  grade = "A";
} else if (points >= 85) {
  grade = "B";
} else if (points >= 75) {
  grade = "C";
} else if (points >= 70) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`Student/ka ${fullName} získává známku ${grade} s ${points} body.`);
