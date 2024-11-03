// Dans cet exemple, l'interface Worker impose aux classes Employee et Robot de fournir
// des implémentations pour work, eat, et sleep. Toutefois, Robot n'a pas besoin de eat
// et sleep, ce qui entraîne une violation du principe de ségrégation des interfaces (ISP).

// Interfaces spécifiques
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

// Classe de travailleur régulier qui implémente les interfaces nécessaires
class Employee implements Workable, Eatable, Sleepable {
  work(): void {
    console.log("L'employé travaille.");
  }

  eat(): void {
    console.log("L'employé mange.");
  }

  sleep(): void {
    console.log("L'employé dort.");
  }
}

// Classe de robot qui implémente uniquement l'interface Workable
class Robot implements Workable {
  work(): void {
    console.log("Le robot travaille.");
  }
}

// Utilisation
const employee = new Employee();
employee.work();
employee.eat();
employee.sleep();

const robot = new Robot();
robot.work(); // Aucune méthode non nécessaire
