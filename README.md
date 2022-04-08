## Second step with React => Components, UseState, UseEffect and Routing

Premièrement, clone le *repo* et execute npm install.
Sur le repo, vous pouvez voir une branche correction. Sur la branche correction, chaque commit (cf history => ) correspond à une étape du projet. Vous pouvez donc comparez votre code à la correction, à chaque étape du projet.

## Un petit tour d'horizon
Tu trouveras dans le dossier src, le fichier *app.jsx* (Point d'entrée de l'application) avec seulement un titre en h1.

## Créons nos routes
- 1/ Commence par ajouter le module de gestiond es route sur React (*npm install react-router*)
- 2/ Dans *app.js*, ajoute les routes vers tes 2 pages ('/' vers la page `Home` et '/beers' vers la page `Beers`)
- 3/ Créer les composants React correspondant à tes pages dans un sous-dossier *./pages* dans src avec un titre h1 sur chaque. Joue avec ton url pour vérifer que tout fonctionne
- 4/ Créer un composant `Nav` dans un sous-dossier *./components*. Tu y placera un logo et tes 2 liens de navigation vers tes pages.
- 5/ Integre ton composant de navigation dans ton *app.jsx*

## Occupons nous de la page d'acceuil
- 1/ Tu trouveras dans le dossier support le screen shot de la page d'acceuil (https://github.com/jujuck/React-Beers-Shop/blob/main/Support/home_beershop.png). Le style est majoritairement fait sur Bootstrap mais tu peux faire le tien pour t'entrainer. L'objectif n'est pas de reproduire celui-ci, mais de l'utiliser comme guide de construction de la page.
- 2/ Dans la page *Home.jsx*, importe le fichier de data *home.js* fourni. Observe celui ci, c'est notre source de donnée pour construire la page d'acceuil.
- 3/ Commence par créer un composant *Hero.jsx* et integre le à *home.jsx*. Passe lui les props nécessaires à sa construction (hero) uniquement.
- 4/ Dans le composant *hero.jsx*, met en place ta structure `JSX` pour cette zone et injecte les données à partir des props. Pour le style, crée un fichier *Hero.css* à coté et importe le directement dans *Hero.jsx*.
- 5/ Réalise la même opérations pour la partie `phylosophy`.
- 6/ Réalise de nouveau la même opérations pour la partie `discovery`. Attention, notre composant à cette fois une partie répétitive que tu peux reproduire avec un `.map()`. L'idéal étant alors de créer de nouveau un sous composant *Malt.jsx* et de lui transférer les props.
- 7/ Réalise la même opérations que précedemment avec la partie `customers` et son sous composant *Avatar.jsx*
- 8/ Pour le formulaire de contact, nous allons de nouveau créer un sous composant *Footer.jsx*. Cependant, nous le voulons dans toutes nos pages. Nous l'intégrerons donc directement dans *App.jsx*, entre le `</Routes >` et `</BrowserRouter >`

## Alors récupérer nos produits, la page bières

