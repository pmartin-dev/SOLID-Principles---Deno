# SRP (Single Responsability Principles)

Un module (= classe ou fonction ou ensemble de classe/fonction) doit avoir une et une seule raison de changer.
On désire rassembler ce qui change pour les même raisons dans le même module.

Séparer ce qui change pour différentes raisons.

## Exemple de responsabilité fréquentes:

- UI/Templating
- Stockage/Persistence
- Algorythmes
- Règles métier/Domain modèle
- Boilerplate/Setup/Framework
- Validations/Assertions
- …

## Avantages:

- Permet le dev en parallèle
- Contenir les changmenets dans des classes spécifiques (réduit la fragilité du pgm)

## Inconvénients:

- Pousse à avoir plus de modules
- Pas tjrs facile de savoir à quelle responsabilité associer un module