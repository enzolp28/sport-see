# SportSee

Application de suivi de performances sportives

## Frontend

### Prérequis

- Node.js (version recommandée : 18.x ou supérieure)
- npm ou yarn

### Installation

1. Clonez le projet
```bash
git clone https://github.com/enzolp28/sport-see.git
```

2. Accédez au répertoire du projet
```bash
cd sport-see
```

3. Installez les dépendances
```bash
npm install
# ou
yarn install
```

### Lancement du serveur frontend

Pour lancer l'application en mode développement :
```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

Pour construire l'application pour la production :
```bash
npm run build
# ou
yarn build
```

Pour lancer l'application en mode production :
```bash
npm run start
# ou
yarn start
```

## Backend (API)

### Prérequis

- NodeJS (version 12.18 ou supérieure)
- Yarn
- Docker (optionnel)

### Installation et lancement (sans Docker)

1. Clonez le dépôt du backend
2. Installez les dépendances avec la commande `yarn`
3. Lancez l'API avec la commande `yarn dev`

### Installation et lancement (avec Docker)

1. Construisez l'image Docker :
```bash
docker image build --no-cache -t micro-api .
```

2. Lancez le conteneur :
```bash
docker container run --name micro-api -p 3000:3000 -dt micro-api yarn
```

Pour arrêter le conteneur :
```bash
docker container stop micro-api
```

Pour supprimer le conteneur :
```bash
docker container rm micro-api
```

### Endpoints disponibles

L'API inclut quatre endpoints :

- `http://localhost:3000/user/${userId}` - Informations utilisateur (données personnelles, score du jour, données clés)
- `http://localhost:3000/user/${userId}/activity` - Activité quotidienne (poids et calories)
- `http://localhost:3000/user/${userId}/average-sessions` - Sessions moyennes par jour
- `http://localhost:3000/user/${userId}/performance` - Performances utilisateur

**Note importante : Seuls deux utilisateurs sont disponibles avec les ID 12 et 18.**

## Technologies utilisées

### Frontend
- Next.js 15.0
- React 18
- TypeScript
- Recharts
- Tailwind CSS

### Backend
- Node.js
- Express
