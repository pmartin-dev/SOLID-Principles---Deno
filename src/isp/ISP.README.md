# ISP (Interface Segregation Principle)

- Les clients d’un module ne doivent pas dépendre de ce qu’ils n’utilisent pas
- On veut dépendre de ce qu’on utilise
- L’interface est plus proche de celui qui l’utilise que de celui qui doit l’implémenter

## Avantages:

- Réduit le couplage
- Amélior le temps de compilation
- Augmente la testabilité

## Inconvénients:

- Peu rendre le code plus complexe car augmente le nombre d’interfaces
- Nécessite de bien connaitre le problème
