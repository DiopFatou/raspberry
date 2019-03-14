# raspberry

- Assurez vous d'installer nodejs et npm
- Cloner le projet au même niveau que le dossier Retropie
- Appeler le dossier contenant le projet "projetNodeJS"
- Installer les dépendances renseignées dans le package.json en faisant "npm install"
- Une fois dépendances installées, faire un "node app.js" pour lancer le serveur. Il faudra avoir récupérer l'IP du raspberry qui sera utilisé pour se connecter. Placer l'URL suivant pour accéder à la page web générée: 
  - "IP_raspberry:3000/file" pour pouvoir défiler entre les différents répertoires
  - "IP_raspberry:3000/upload" pour pouvoir charger un fichier qui sera placé pour le moment dans le dossier "uploads"
  
- PS: Dans la index.html, il faut modifié l'IP du raspberry qui utilisé dans la requête qui permet de récupérer la liste des dossiers de jeux du dossier "roms"
