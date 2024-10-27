# TP1-Mundiapolis-NodeJS

## Description

Ce projet est réalisé dans le cadre du TP1 du cours de Développement Web Avancé à Mundiapolis University. Il s’agit d’une application de gestion de livres développée en Node.js avec Express. L’application permet d’effectuer des opérations CRUD (Create, Read, Update, Delete) sur une collection de livres, commandes et clients.

## Objectifs du projet

- Développer une API RESTful pour gérer des livres, commandes, et clients.
- Mettre en œuvre les routes pour afficher, ajouter, modifier et supprimer des éléments.
- Utiliser Express comme framework pour gérer le routage et les requêtes HTTP.

## Fonctionnalités

- **Afficher tous les livres** : Obtenez la liste de tous les livres disponibles.
- **Rechercher un livre par ID** : Recherchez un livre spécifique via son identifiant.
- **Ajouter un nouveau livre** : Ajoutez un nouveau livre avec un titre et un prix.
- **Mettre à jour un livre** : Modifiez les détails d’un livre existant.
- **Supprimer un livre** : Supprimez un livre de la collection.
- **Gestion des commandes** : Ajouter, modifier et afficher les commandes avec leurs livres associés.
- **Gestion des clients** : Ajouter, modifier et afficher les informations client.

## Technologies utilisées

- **Node.js** : Environnement d’exécution JavaScript.
- **Express.js** : Framework web minimaliste pour Node.js.
- **Mongoose** : ODM pour MongoDB, utilisé pour gérer les données de manière structurée.

## Prérequis

Avant de cloner et exécuter ce projet, assurez-vous que vous avez installé les éléments suivants :

- Node.js (version 14.x ou supérieure)
- npm (le gestionnaire de packages de Node.js)
- MongoDB (local ou cluster)

## Installation

1. Cloner le dépôt :

    ```bash
    git clone https://github.com/ton-utilisateur/TP1-Mundiapolis-NodeJS.git
    ```

2. Naviguer dans le répertoire du projet :

    ```bash
    cd TP1-Mundiapolis-NodeJS
    ```

3. Installer les dépendances :

    ```bash
    npm install
    ```

4. Configurer l’environnement :
    Renommez le fichier `.env.example` en `.env` et remplissez les variables comme `MONGO_URL` et `PORT` pour configurer MongoDB et le serveur.

## Utilisation

1. Lancer le serveur :

    ```bash
    npm start
    ```

2. Ou avec Nodemon (si installé globalement) :

    ```bash
    nodemon index.js
    ```

## Documentation de l’API

### Accéder à l’application

- **Liste des livres** : [http://localhost:9090/api/books](http://localhost:9090/api/books)
- **Liste des commandes** : [http://localhost:9090/api/orders](http://localhost:9090/api/orders)
- **Liste des clients** : [http://localhost:9090/api/customers](http://localhost:9090/api/customers)
- **Accéder à toutes les données** : [http://localhost:9090/api](http://localhost:9090/api) - Affiche tous les livres, commandes et clients.

### Exemples de requêtes avec Postman

#### Obtenir tous les livres

- **Méthode** : GET
- **URL** : `http://localhost:9090/api/books`

#### Ajouter un nouveau livre

- **Méthode** : POST
- **URL** : `http://localhost:9090/api/books`
- **Body (JSON)** :

    ```json
    {
      "title": "Nouveau Livre",
      "price": 35,
      "author": "Auteur Exemple"
    }
    ```

#### Mettre à jour un livre

- **Méthode** : PATCH
- **URL** : `http://localhost:9090/api/books/:id`
- **Body (JSON)** :

    ```json
    {
      "title": "Livre mis à jour",
      "price": 40
    }
    ```

#### Supprimer un livre

- **Méthode** : DELETE
- **URL** : `http://localhost:9090/api/books/:id`

#### Obtenir toutes les commandes

- **Méthode** : GET
- **URL** : `http://localhost:9090/api/orders`

#### Ajouter une commande

- **Méthode** : POST
- **URL** : `http://localhost:9090/api/orders`
- **Body (JSON)** :

    ```json
    {
      "orderDate": "2023-10-01",
      "totalAmount": 150,
      "customer": "<customer_id>",
      "books": ["<book_id1>", "<book_id2>"]
    }
    ```

#### Obtenir tous les clients

- **Méthode** : GET
- **URL** : `http://localhost:9090/api/customers`

#### Ajouter un client

- **Méthode** : POST
- **URL** : `http://localhost:9090/api/customers`
- **Body (JSON)** :

    ```json
    {
      "fName": "Alice",
      "lName": "Smith",
      "email": "alice.smith@example.com",
      "password": "password123"
    }
    ```

## Auteur

Mohamed Lakssir