export class CarBlueprint {
  constructor(color, motor, fuel) {
    this.color = color; // this.color => property třídy, color = parametr constructoru (existuje jen v constructu)
    this.motor = motor;
    this.fuel = fuel;
    this.wheels = 4; // auto bude mít vždy 4 kola
    console.log(
      `Auto bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.motor} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - kola: ${this.wheels}`
    );
  }

  logCarProperties() {
    console.log(
      `Informace o autě: \n\t - motor: ${this.motor} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - kola: ${this.wheels}`
    );
  }

  repaint(newColor) {
    console.log(`Auto bylo přebarveno z ${this.color} na ${newColor}`);
    this.color = newColor;
  }

  getColor() {
    return this.color; // vrátí barvu v řídícím programu, return je vždy poslední příkaz
    console.log("Test"); // Toto se již nevypíše (je za return)
  }
}
