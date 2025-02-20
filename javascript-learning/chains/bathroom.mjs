//bathroom.mjs
//entry_hall.mjs
//visitor.mjs
// složka chains:

import { EntryHall } from "./entry_hall.mjs";

export class Bathroom {
  constructor(name) {
    this.name = name;
    console.log(`Návštěvník ${name} vstoupil na toaletu`);
  }

  returnToEntryHall() {
    console.log(`${this.name} se vrací do vstupní haly`);
    return new EntryHall(this.name);
  }

  washHands() {
    console.log(`${this.name} si umyl/a ruce`);
    return this;
  }
}
