const actualAge = 15;
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

let yearWord;

if (drinkingAgeLimit - actualAge == 1) {
  yearWord = "rok";
} else if (drinkingAgeLimit - actualAge > 4) {
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
