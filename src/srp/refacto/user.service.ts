// Après refactoring : application du principe SRP

// Classe User, représentant un utilisateur
class User {
  constructor(public name: string, public email: string) {}
}

// Classe UserRepository : gère l'enregistrement de l'utilisateur
class UserRepository {
  save(user: User): void {
    console.log(`User ${user.name} enregistré en base de données.`);
  }
}

// Classe EmailService : gère l'envoi de l'email de bienvenue
class EmailService {
  sendWelcomeEmail(user: User): void {
    console.log(`Email de bienvenue envoyé à ${user.email}.`);
  }
}

// Classe UserService : orchestre l'inscription en utilisant des dépendances spécifiques
class UserService {
  constructor(
    private userRepository: UserRepository,
    private emailService: EmailService
  ) {}

  registerUser(user: User): void {
    this.userRepository.save(user);
    this.emailService.sendWelcomeEmail(user);
  }
}

// Utilisation
const user = new User("Alice", "alice@example.com");
const userRepository = new UserRepository();
const emailService = new EmailService();
const userService = new UserService(userRepository, emailService);

userService.registerUser(user);
