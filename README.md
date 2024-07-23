# Mon Portfolio - React + TypeScript + Vite

Ce projet est mon portfolio personnel développé avec React, TypeScript et Vite. Il inclut des fonctionnalités modernes telles que le rechargement à chaud (HMR) et une configuration ESLint pour assurer une qualité de code optimale.

## Table des Matières

- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Configuration ESLint](#configuration-eslint)
- [Scripts](#scripts)
- [Licence](#licence)

## Fonctionnalités

- Développement rapide avec [Vite](https://vitejs.dev/)
- Utilisation de [React 18](https://reactjs.org/) avec TypeScript
- Rechargement à chaud (HMR) pour une expérience de développement fluide
- Configuration ESLint pour des règles de linting optimisées

## Installation

Pour commencer avec ce projet, suivez ces étapes :

1. **Cloner le dépôt** :

   ```bash
   https://github.com/Armelsteve1/portfolio.git
   cd portfolio
   ```

2. **Installer les dépendances** :

```bash
npm install
```

## Configuration

### Configuration de Vite

Le projet est configuré avec [Vite](https://vitejs.dev/). Vous trouverez le fichier de configuration de Vite à vite.config.ts. Vous pouvez ajuster les paramètres de Vite en fonction de vos besoins.

### Configuration de TypeScript

Le fichier de configuration TypeScript se trouve à tsconfig.json. Modifiez ce fichier selon vos préférences et besoins pour TypeScript.

## Utilisation

Pour démarrer le serveur de développement, exécutez :

```bash
npm install
```

Cette commande lancera le serveur de développement Vite avec le rechargement à chaud activé.
Pour construire le projet pour la production, exécutez :

```bash
  npm run build
```

Les fichiers construits seront placés dans le répertoire `dist`.
Pour prévisualiser la version de production localement, utilisez :

```bash
  npm run preview
```

## Configuration ESLint

Pour un projet de production, il est recommandé de configurer ESLint pour utiliser des règles de linting basées sur les types. Voici comment mettre à jour la configuration ESLint :

1. **Mettre à jour la Configuration ESLint** :

Modifiez votre fichier de configuration ESLint (par exemple, `.eslintrc.js`) comme suit :

```bash
export default {
 parserOptions: {
   ecmaVersion: 'latest',
   sourceType: 'module',
   project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
   tsconfigRootDir: __dirname,
 },
 extends: [
   'eslint:recommended',
   'plugin:@typescript-eslint/recommended-type-checked',
   'plugin:react/recommended',
   'plugin:react/jsx-runtime'
 ],
 plugins: ['@typescript-eslint', 'react'],
 rules: {
   // Ajoutez ou personnalisez vos règles ici
 }
}
```

2. **Installer les Plugins ESLint** :

Si ce n'est pas déjà fait, installez les plugins nécessaires :

```bash
npm install eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev

```

## Scripts

Voici les scripts définis dans le fichier package.json` :

- `npm run dev` : Démarre le serveur de développement avec HMR.
- `npm run build` : Construit le projet pour la production.
- `npm run preview` : Prévisualise le build de production localement.
- `npm run lint` : Exécute ESLint sur les fichiers du projet.
- `npm run format` : Formate le code avec Prettier (si Prettier est configuré).

## Licence

Ce projet est sous la Licence [MIT](https://github.com/Armelsteve1/portfolio/blob/main/LICENSE) - voir le fichier LICENSE pour plus de détails.
