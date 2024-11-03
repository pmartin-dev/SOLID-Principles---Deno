# OCP (Open Closed Principles)

- Un module doit être ouvert à l’extension mais fermé à la modification
- On doit pouvoir changer le comportement du programme sans en altérer le code source

Exemple avec une télévision sur laquelle il est possible de regarder plusieurs films sans avoir à changer de télévision.

Le principe est de séparer le comportement extensible de l’algo principal.

Ici il est possible d’utiliser le pattern Strategie ou Template Méthode.

## Avantages:

- Pouvoir avancer sans modifier le code existant
- Programme extensible

## Inconvénients:

- Peut rendre le programme trop abstrait si on en abuse
- Difficile de savoir quand ouvrir le code (en générale on applique ce principe quand le nombre de possibilités est large )
- Demande de bien connaitre le problème pour abstraire au bon endroit (nécessite d’être expérinementé)