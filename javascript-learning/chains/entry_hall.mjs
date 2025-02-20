import { Bathroom } from "./bathroom.mjs";

export class EntryHall {
  constructor(name) {
    this.name = name;
    console.log(`Návštěvník ${name} vstoupil do vstupní haly`);
  }

  entryBathroom() {
    console.log(`${this.name} jde na toaletu`);
    return new Bathroom(this.name);
  }

  askReceptionistQuestion(question) {
    console.log(`${this.name} se ptá recepční na otázku: ${question}`);
    console.log(`Recepční mlčí`);
    return this;
  }
}
