// Dans cet exemple, nous avons une classe Discount qui calcule le rabais en fonction du type de client.
// Le principe Open/Close n'est pas respecté car si nous voulons ajouter un nouveau type de client,
// nous devons modifier la classe Discount.

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
