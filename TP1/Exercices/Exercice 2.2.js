// Exercice 2.2

     const fs = require('fs');

     function writeNewFile(err, data) {
       fs.writeFile('texteE2-2.txt', data, (err) => {
         if (err) {
           console.log (err);
         } else {
           console.log("File Written Succesfully\n");
         }
       })
     }
     
     fs.readFile('./texteE2.txt', writeNewFile);