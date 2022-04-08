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


