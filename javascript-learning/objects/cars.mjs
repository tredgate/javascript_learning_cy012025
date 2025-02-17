import { CarBlueprint } from "./car_blueprint.mjs"; //musíme použít i příponu při používání modulů JS (objekty, import)

const dieselCar = new CarBlueprint("Červená", "1.4 TDI", "Diesel");
dieselCar.logCarProperties();
const raceCar = new CarBlueprint("Bílá s modrými pruhy", "3.6 V8", "Benzín");
raceCar.logCarProperties();
dieselCar.logCarProperties();
const electricCar = new CarBlueprint("Šedá", "EV 160kW", "Elektřina");
electricCar.logCarProperties();
dieselCar.repaint("Modrá");
dieselCar.logCarProperties();
electricCar.logCarProperties();

const auticko = electricCar; // Nevytvořil jsem nový objekt, ale dal "přezdívku" electric car
auticko.repaint("Růžová");
electricCar.logCarProperties(); // Auticko = prezdivka electricCar, electricCar i Auticko jsou stejný objekt, tedy růžové auto

const carColor = dieselCar.getColor();
console.log("Barva diesel auta: " + carColor);
