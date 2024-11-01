// Avant refactoring : la classe UserService a plusieurs responsabilités

class User {
  constructor(public name: string, public email: string) {}
}

class UserService {
  constructor() {}

  // Enregistre l'utilisateur dans la base de données
  save(user: User): void {
    console.log(`User ${user.name} enregistré en base de données.`);
  }

  // Envoie un email de bienvenue
  sendWelcomeEmail(user: User): void {
    console.log(`Email de bienvenue envoyé à ${user.email}.`);
  }

  // Inscrit un nouvel utilisateur (enregistre et envoie l'email)
  registerUser(user: User): void {
    this.save(user);
    this.sendWelcomeEmail(user);
  }
}

// Utilisation
const user = new User("Alice", "alice@example.com");
const userService = new UserService();
userService.registerUser(user);
