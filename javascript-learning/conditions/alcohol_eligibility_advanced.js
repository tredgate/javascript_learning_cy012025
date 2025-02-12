const actualAge = 15;
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

let yearWord;
const ageLeft = drinkingAgeLimit - actualAge;

// Skloňování rozdílu roků
if (ageLeft == 1) {
  yearWord = "rok";
} else if (ageLeft > 4) {
  yearWord = "let";
} else {
  yearWord = "roky";
}

if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol.`);
} else if (actualAge >= 0) {
  console.log(
    `${fullName} ještě nemůže pít alkohol. Chybí mu ještě ${
      drinkingAgeLimit - actualAge
    } ${yearWord}.`
  );
} else {
  console.log("Neplatný věk");
}

"1" == 1; // true, 1 = 1
"1" === 1; // false, text není číslo

let i = 1;
i = i + 1;
i++; // stejné jako i = i + 1 (navýší i o jedna)

/*

Vytvořte jednoduchý program pro výpočet známky studentům.

Vytvořte soubor: students_grading.js
Ve složce: javascript-learning/exercises

Vstupy: 
Počet bodů studenta (max 100 bodů).
Jméno studenta.

Hodnocení:
Známka A: 90 - 100 bodů
Známka B: 85 - 89 bodů
Známka C: 75 - 84 bodů
Známka D: 70 - 74 bodů
Známka F: méně než 70 bodů

Výsledek zaloguj srozumitelně do konzole s jménem.
TIP: začni podmínku od 90 bodů, ať se ti správně vyhodnotí podmínky níže.
*/
