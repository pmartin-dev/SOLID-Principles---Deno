// Dans cet exemple, la classe Switch dépend directement de la classe LightBulb.
// Si on veut changer le type de lumière ou ajouter un autre type de dispositif,
//  il faut modifier Switch, ce qui viole le principe d'inversion de dépendance (DIP).

// Avant refactoring : Violation du principe d'inversion de dépendance (DIP)

class LightBulb {
  turnOn(): void {
    console.log("L'ampoule est allumée.");
  }

  turnOff(): void {
    console.log("L'ampoule est éteinte.");
  }
}

class Switch {
  private lightBulb: LightBulb;

  constructor() {
    this.lightBulb = new LightBulb();
  }

  toggle(state: boolean): void {
    if (state) {
      this.lightBulb.turnOn();
    } else {
      this.lightBulb.turnOff();
    }
  }
}

// Utilisation
const mySwitch = new Switch();
mySwitch.toggle(true); // Allume l'ampoule
mySwitch.toggle(false); // Éteint l'ampoule
