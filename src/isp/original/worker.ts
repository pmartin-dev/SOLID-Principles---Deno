// Dans cet exemple, le principe d'interface ségrégée (ISP) est violé car la classe Worker
// a des méthodes qui ne sont pas nécessaires pour tous les types de travailleurs.
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

// Classe de travailleur régulier
class Employee implements Worker {
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

// Classe de robot qui n'a pas besoin de manger ou dormir
class Robot implements Worker {
  work(): void {
    console.log("Le robot travaille.");
  }

  eat(): void {
    throw new Error("Le robot ne mange pas.");
  }

  sleep(): void {
    throw new Error("Le robot ne dort pas.");
  }
}

// Utilisation
const employee = new Employee();
employee.work();
employee.eat();
employee.sleep();

const robot = new Robot();
robot.work();
robot.eat(); // Problème : Le robot n'a pas besoin de cette méthode
