# TP1-Mundiapolis-NodeJS

## Description

Ce projet est réalisé dans le cadre du TP1 du cours de Développement Web Avancé à Mundiapolis University. Il s'agit d'une application de gestion de livres développée en Node.js avec Express. L'application permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur une collection de livres.

## Objectifs du projet

- Développer une API RESTful pour gérer des livres.
- Mettre en œuvre les routes pour afficher, ajouter, modifier et supprimer des livres.
- Utiliser Express comme framework pour gérer le routage et les requêtes HTTP.

## Fonctionnalités

- **Afficher tous les livres** : Obtenez la liste de tous les livres disponibles.
- **Rechercher un livre par ID** : Recherchez un livre spécifique via son identifiant.
- **Ajouter un nouveau livre** : Ajoutez un nouveau livre avec un titre et un prix.
- **Mettre à jour un livre** : Modifiez les détails d'un livre existant.
- **Supprimer un livre** : Supprimez un livre de la collection.

## Technologies utilisées

- **Node.js** : Environnement d'exécution JavaScript.
- **Express.js** : Framework web minimaliste pour Node.js.
- **Body-parser** : Middleware pour gérer les données POST (ajouter et mettre à jour des livres).
  
## Prérequis

Avant de cloner et exécuter ce projet, assurez-vous que vous avez installé les éléments suivants :

- [Node.js](https://nodejs.org/en/) (version 14.x ou supérieure)
- [npm](https://www.npmjs.com/) (le gestionnaire de packages de Node.js)

## Installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/ton-utilisateur/TP1-Mundiapolis-NodeJS.git
2. **Naviguer dans le repertoire du projet :**

    ```bash
    cd TP1-Mundiapolis-NodeJS

3. **Installer les dependances :**
    ```bash
    npm install 

## Utilisation 
1. **Lancer le serveur:**
    ```bash
    npm start 

2. **Ou avec nnodemon(si installer globalement):**
    ````bash 
    nodemon server.js (or whatever you want to start)


# Instructions d'utilisation de l'API des livres

Vous pouvez utiliser Nodemon pour démarrer le serveur en exécutant la commande suivante dans votre terminal :

    nodemon server.js

## Accéder à l'application

- **Liste des livres** : [http://localhost:9090/books](http://localhost:9090/books)
- **Ajouter un livre** : Envoyez une requête POST à [http://localhost:9090/books](http://localhost:9090/books)
- **Rechercher un livre** : [http://localhost:9090/book/](http://localhost:9090/book/)
- **Modifier un livre** : Envoyez une requête PATCH à [http://localhost:9090/book/](http://localhost:9090/book/)
- **Supprimer un livre** : Envoyez une requête DELETE à [http://localhost:9090/book/](http://localhost:9090/book/)

## Exemple de requêtes avec Postman

### Obtenir tous les livres

- **Méthode** : GET  
- **URL** : [http://localhost:9090/books](http://localhost:9090/books)

### Ajouter un nouveau livre

- **Méthode** : POST  
- **URL** : [http://localhost:9090/books](http://localhost:9090/books)
- **Body (JSON)** :

    ```json
    {
      "title": "Nouveau Livre",
      "price": 35
    }
    ```

### Mettre à jour un livre

- **Méthode** : PATCH  
- **URL** : [http://localhost:9090/book/1](http://localhost:9090/book/1)
- **Body (JSON)** :

    ```json
    {
      "title": "Livre mis à jour",
      "price": 40
    }
    ```

### Supprimer un livre

- **Méthode** : DELETE  
- **URL** : [http://localhost:9090/book/1](http://localhost:9090/book/1)

## Auteur

Mohamed Lakssir


