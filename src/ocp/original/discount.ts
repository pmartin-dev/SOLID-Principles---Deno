// Avant refactoring : Violation du principe Open/Closed

class Discount {
  calculate(price: number, type: string): number {
    if (type === "student") {
      return price * 0.9; // 10% de réduction pour les étudiants
    } else if (type === "senior") {
      return price * 0.85; // 15% de réduction pour les seniors
    } else if (type === "employee") {
      return price * 0.8; // 20% de réduction pour les employés
    }
    return price; // Aucun rabais par défaut
  }
}

// Utilisation
const discount = new Discount();
console.log(discount.calculate(100, "student"));
console.log(discount.calculate(100, "senior"));
