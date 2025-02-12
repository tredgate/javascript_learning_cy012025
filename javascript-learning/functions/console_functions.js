//functions
//console_functions.js

function logHelloWorld() {
  console.log("Ahoj světe!");
}

logHelloWorld();
logHelloWorld();
logHelloWorld();

logText("Volám funkci");
logText("Zase volám");
logText("Haló");
logHelloWorld();
logText("Hálo?");

function logText(textParameter) {
  console.log("TREDGATE 12.2.2025 20:38 - " + textParameter);
}
