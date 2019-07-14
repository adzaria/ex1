
# Ex 1

Il y a fort longtemps, au moyen âge, les pages se chargeaient depuis le serveur à chaque requête ! Aujourd'hui on aime que les pages ne chargent ... JAMAIS ... Meme pas au moment du login ! (Et ce serait pourtant légitime !)

J'ai pris des extrais de ton systeme de login que j'ai intégré au starter pack d'hier -

Le but : refaire la même chose, sans que le formulaire ne soit posté (sinon il a le 'défaut' de "recharger" la page intégralement). Je ne te donne pas plus d'indices pour le moment - histoire qu'on en parle au telephone.

# Scenario utilisateur devant être vérifiés :
En entrant son username "elias" et son mot de passe "mdp", l'utilisateur est connecté à son espace personnel qui affiche "bienvenue {nom}". La page ne se recharge pas, pour donner une sensation de fluidité à l'utilisateur et ne pas le couper dans son experience.

# Composants
* le composant '/login' est déjà présent, tu n'as PAS a gérer d'accès à une base de donnée. Il n'y a d'ailleurs ni base de donnée ni session dans l'exercice, l'api login simule juste la présence d'une base de donnée. Elle renvoie
{auth:true} si les identifiants sont bons et {auth:false} dans le cas inverse.
* le composant '.api/get/user' simule aussi l'accès à une base de donnée. Dans notre cas il renvoie toujours {name:"elias"}. Bien entendu dans une vraie application on accède soit aux données de session soit à la base de donnée... Il s'agit juste d'un endpoint pour que tu fasses une requête depuis le front.


# Bonus :
* lorsqu'on a de grosses pages, le code jsx ne se trouve evidemment pas dans render() mais dans des fichiers distincts appelés par render. Externalise le code dans des fichiers appelés public.js et private.js !
* un message "mauvais identifiants" apparait en cas d'erreur de saisie
* un message "serveur non joignable" apparait si je coupe le serveur avant de cliquer sur "me connecter"
* reflexion sur ton repo qui concerne le login : tu peux reflechir à comment faire un middleware qui verifie que l'utilisateur ai les droits d'afficher home, sans intégrer de test dans la fonction elle même (désavantage d'être répétitif et de devoir indenter le code a chaque fois). 

# NB :
* cet exercice se concentre sur le login, j'ai donc retiré toute notion de session et de base de donnée, les endpoints "simulent" l'accès à une base de donnée mais il n'y a rien derriere. Je vois que tu as appris à utiliser express-session et un client, c'est très bien -
* il n'y a volontairement aucun indice dans ce fichier texte, on verra au tel demain si tu en as besoin, evidemment n'hésite pas 
* Il y a de petites fautes ici et là, rien de bien mechant mais ... ça ne compilera pas si elles ne sont pas reglées ! :p
