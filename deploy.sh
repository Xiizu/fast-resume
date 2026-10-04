#!/bin/bash

echo "🔄 Récupération des nouveautés..."
git checkout main
git pull origin main

echo "📦 Installation des dépendances..."
npm install

echo "🏗️ Build du projet statique..."
npm run build

echo "✅ Déploiement terminé ! Nginx prend le relais."
