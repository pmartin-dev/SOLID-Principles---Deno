// Dans cet exemple, Square hérite de Rectangle, mais la méthode calculateArea
// produit un résultat incorrect lorsqu’elle est appelée avec un Square.
// Cela viole le principe de substitution de Liskov (LSP), car Square ne peut
// pas être substitué de manière fiable à Rectangle sans altérer le comportement attendu.

class Rectangle {
  constructor(public width: number, public height: number) {}

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

// Classe carrée héritant de Rectangle
class Square extends Rectangle {
  constructor(size: number) {
    super(size, size);
  }

  override setWidth(width: number): void {
    this.width = width;
    this.height = width; // Maintien de l'aspect carré
  }

  override setHeight(height: number): void {
    this.width = height;
    this.height = height; // Maintien de l'aspect carré
  }
}

// Fonction qui accepte des Rectangles
function calculateArea(rectangle: Rectangle): number {
  rectangle.setWidth(5);
  rectangle.setHeight(10);
  return rectangle.getArea(); // Devrait être 5 * 10 = 50
}

// Utilisation
const rectangle = new Rectangle(4, 5);
console.log(calculateArea(rectangle)); // Affiche 50

const square = new Square(5);
console.log(calculateArea(square)); // Problème : Affiche 100 au lieu de 50
