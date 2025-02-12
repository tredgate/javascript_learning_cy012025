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
/*
Změny pushni do Github (add, commit, push) - nezapomeň na to, že je branch nová a u push musíme zadávat -u (pokud jsme už nepushovali)
Vytvoř Pull Request do mainu.
Schval a zmerguj Pull Request do mainu.
 */
