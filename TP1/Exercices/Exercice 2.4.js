  // Exercice 2.4

     const fs = require('fs');

     const data1 = fs.readFileSync('.\texteE2.txt', 'utf8');
     const data2 = fs.readFileSync('.\texteE2-2.txt', 'utf8');

     fs.appendFileSync('.\texteE2-3.txt', data1 + '\n' + data2 + '\n');

     console.log('La fusion est réussi');