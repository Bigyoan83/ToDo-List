// Exercice 3.1

const fs = require('fs');  // Importation du module 'fs' pour la manipulation des fichiers
const readline = require('readline');  // Importation du module 'readline' pour la lecture depuis la ligne de commande

const rl = readline.createInterface({  // Création d'une interface de lecture avec readline
    input: process.stdin,  // Utilisation de process.stdin comme entrée (lecture depuis la ligne de commande)
    output: process.stdout  // Utilisation de process.stdout comme sortie (écriture dans la console)
});

rl.question('Veuillez saisir du texte : ', function(texteSaisi) {  // Pose d'une question à l'utilisateur et attente de sa réponse
    fs.writeFile('texte_enregistre.txt', texteSaisi, function(err) {  // Écriture du texte saisi dans un fichier texte nommé 'texte_enregistre.txt'
      if (err) {  // Si une erreur survient lors de l'écriture du fichier
        console.error('Erreur lors de l\'enregistrement du texte :', err);  // Affichage de l'erreur dans la console
        return;  // Sortie de la fonction
      }
      console.log('Le texte a été enregistré avec succès dans le fichier texte_enregistre.txt');  // Affichage d'un message de confirmation dans la console
      rl.close();  // Fermeture de l'interface de lecture
    });
  });







    

  






    



    

    

