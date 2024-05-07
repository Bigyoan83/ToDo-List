//Exercice 3.2

const fs = require('fs'); 
const readline = require('readline');  

const rl = readline.createInterface({  
    input: process.stdin, 
    output: process.stdout  
});

rl.question('Veuillez rentrer votre Nom : ', function(texteSaisi) {  
     fs.appendFile('texte_enregistre.txt', texteSaisi + "\n", function(err) { 
      if (err) {  
        console.error('Erreur lors de l\'enregistrement du texte :', err);  
        return; 
      }
      console.log('Le texte a été enregistré avec succès dans le fichier texte_enregistre.txt'); 
    });


    rl.question('Veuillez rentrer votre prénom ? : ', function(texteSaisi) {  
        fs.appendFile('texte_enregistre.txt', texteSaisi + "\n", function(err) { 
         if (err) { 
           console.error('Erreur lors de l\'enregistrement du texte :', err); 
           return; 
         }
         console.log('Le texte a été enregistré avec succès dans le fichier texte_enregistre.txt');  
       });


       rl.question('Veuillez rentrer votre adresse ? : ', function(texteSaisi) { 
        fs.appendFile('texte_enregistre.txt', texteSaisi + "\n" + "----------" + "\n", function(err) { 
         if (err) { 
           console.error('Erreur lors de l\'enregistrement du texte :', err);  
           return;
         }
         console.log('Le texte a été enregistré avec succès dans le fichier texte_enregistre.txt');

         rl.close(); 
       });
    }); 
});


});