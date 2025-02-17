// arrays
// array_learning.js

const cities = ["Praha", "Brno", "Ostrava", "Plzeň", "Olomouc"];

console.log("cities: " + cities);
console.log("1. město: " + cities[0]);
console.log("2. město: " + cities[1]);
console.log("3. město: " + cities[2]);
console.log("4. město: " + cities[3]);

for (let i = 0; i < cities.length; i++) {
  console.log(`Cyklím forem města: ${cities[i]}`);
}

cities.forEach((city) => {
  console.log(`Cyklíme cities ve forEach: ${city}`);
});
/*
Vytvořte ve složce: javascript-learning/exercises soubor: foreach_exercise.js
Vytvořte array: usernames
Tuto array naplňte alespoň pěti string hodnotami.
Vytvořte forEach, který postupně vypíše hodnoty z array usernames 
*/
