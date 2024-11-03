// Interface pour les dispositifs contrôlables
interface Switchable {
  turnOn(): void;
  turnOff(): void;
}

// Implémentation pour une ampoule
class LightBulb implements Switchable {
  turnOn(): void {
    console.log("L'ampoule est allumée.");
  }

  turnOff(): void {
    console.log("L'ampoule est éteinte.");
  }
}

// Implémentation pour une lampe LED
class LEDLight implements Switchable {
  turnOn(): void {
    console.log("La lampe LED est allumée.");
  }

  turnOff(): void {
    console.log("La lampe LED est éteinte.");
  }
}

// Classe Switch qui dépend de l'abstraction Switchable
class Switch {
  constructor(private device: Switchable) {}

  toggle(state: boolean): void {
    if (state) {
      this.device.turnOn();
    } else {
      this.device.turnOff();
    }
  }
}

// Utilisation
const lightBulb = new LightBulb();
const ledLight = new LEDLight();

const switchForBulb = new Switch(lightBulb);
switchForBulb.toggle(true); // Allume l'ampoule
switchForBulb.toggle(false); // Éteint l'ampoule

const switchForLED = new Switch(ledLight);
switchForLED.toggle(true); // Allume la LED
switchForLED.toggle(false); // Éteint la LED
