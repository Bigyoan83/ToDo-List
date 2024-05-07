// // Exercice 2.1

     const fs = require('fs');

     fs.readFile('./texteE2.txt', (err, data) => {
         if (err) throw err;
        console.log(data.toString());
     });
