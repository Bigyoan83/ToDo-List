// Exercice 2.3

     const fs = require('fs');

     function fusionDocument (err, data) {
       fs.appendFile ('texteE2-3.txt', data + "\n" , (err) => {
         if (err) {
           console.log (err);
         } else {
           console.log("Dossier fusion avec succes\n");
         }
       })
     }
     fs.readFile('./texteE2.txt', fusionDocument);
     fs.readFile('./texteE2-2.txt', fusionDocument);

