import { Bathroom } from "./bathroom.mjs";
import { EntryHall } from "./entry_hall.mjs";

// ! Standardní objektová struktura

const name = "Petr Fifka";

const entryHall = new EntryHall(name);
entryHall.entryBathroom();

const bathroom = new Bathroom(name);
bathroom.returnToEntryHall();

// ! Fluent interface
// new EntryHall(name).entryBathroom().returnToEntryHall();

new EntryHall("Jiří Nový").entryBathroom().returnToEntryHall().entryBathroom();

new EntryHall("Magdaléna Hrdá")
  .askReceptionistQuestion("Jak se máte?")
  .entryBathroom()
  .returnToEntryHall()
  .askReceptionistQuestion("Můžete mi dát toaletní papír?");

new EntryHall("Kateřina Drobná")
  .entryBathroom()
  .washHands()
  .returnToEntryHall()
  .askReceptionistQuestion("Chybí vám na toaletě ručníky.");
/*
Krok po kroku jak funguje Fluent API:
new EntryHall("Jiří Nový").entryBathroom().returnToEntryHall().entryBathroom();

1. Vytvoří se nový Objekt z třídy EntryHall, zavolá se constructor a uloží jméno do property this.name. Navrátí nový objekt.
2. .entryBathroom() -> V EntryHall objektu zavoláme metodu entryBathroom, ta nám vypíše do konzole text a jako výsledek sama sebe vrátí nový objekt Bathroom (return new Bathroom)
3. V novém objektu probíhá constructor, který si přebírá jméno z předchozího objektu a ukládá jej do své property this.name
4.  .returnToEntryHall() -> Na navráceném objektu (výsledku) Bathroom voláme metodu returnToEntryHall, která vypíše text, a navrátí nový objekt EntryHall jako výsledek
5.V novém objektu probíhá constructor, který si přebírá jméno z předchozího objektu a ukládá jej do své property this.name
...
*/

/*
Přidej novou metodu washHands() do bathroom.mjs
Metoda vypíše do konzole “Uživatel Jméno si umyl/a ruce”
Metoda vrátí stávající objekt (this)
Přidej umytí rukou jako krok do visitor.mjs
*/
