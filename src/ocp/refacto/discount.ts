// Interface pour les différentes stratégies de rabais
interface DiscountStrategy {
  calculate(price: number): number;
}

// Stratégie pour le rabais étudiant
class StudentDiscount implements DiscountStrategy {
  calculate(price: number): number {
    return price * 0.9; // 10% de réduction
  }
}

// Stratégie pour le rabais senior
class SeniorDiscount implements DiscountStrategy {
  calculate(price: number): number {
    return price * 0.85; // 15% de réduction
  }
}

// Stratégie pour le rabais employé
class EmployeeDiscount implements DiscountStrategy {
  calculate(price: number): number {
    return price * 0.8; // 20% de réduction
  }
}

// Classe principale qui utilise une stratégie de rabais
class Discount {
  constructor(private discountStrategy: DiscountStrategy) {}

  calculate(price: number): number {
    return this.discountStrategy.calculate(price);
  }
}

// Utilisation avec différentes stratégies de rabais
const studentDiscount = new Discount(new StudentDiscount());
console.log(studentDiscount.calculate(100));

const seniorDiscount = new Discount(new SeniorDiscount());
console.log(seniorDiscount.calculate(100));

const employeeDiscount = new Discount(new EmployeeDiscount());
console.log(employeeDiscount.calculate(100));
