// Classe Rectangle avec largeur et hauteur indépendantes
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

// Classe Square avec taille fixe
class Square {
  constructor(public size: number) {}

  setSize(size: number): void {
    this.size = size;
  }

  getArea(): number {
    return this.size * this.size;
  }
}

// Fonction qui calcule l'aire d'une forme rectangulaire
function calculateRectangleArea(rectangle: Rectangle): number {
  rectangle.setWidth(5);
  rectangle.setHeight(10);
  return rectangle.getArea(); // 50 pour les rectangles
}

// Fonction qui calcule l'aire d'un carré
function calculateSquareArea(square: Square): number {
  square.setSize(5);
  return square.getArea(); // 25 pour les carrés
}

// Utilisation
const rectangle = new Rectangle(4, 5);
console.log(calculateRectangleArea(rectangle)); // Affiche 50

const square = new Square(5);
console.log(calculateSquareArea(square)); // Affiche 25
