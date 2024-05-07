function coucou() {
     console.log('Bonjour');
    }
    console.log('Start');
    coucou();
     console.log('Stop');


// Exercice 1

    function parler(callback) { // Définition de la fonction 'parler' qui prend une fonction de rappel (callback) en paramètre
    callback(); // Appel de la fonction de rappel (callback) fournie en paramètre
    }
    
    const discution = [ // Déclaration d'un tableau 'discution' contenant trois fonctions anonymes
        function() {
            console.log('Holla');
         },

         function() {
             console.log('Bonjour');
         },

         function() {
             console.log('Hello');
         }
     ];

     for (var i = 0; i < discution.length; i++) {
        parler(discution[i]);
     };
    
     discution.forEach(function(element) {
         console.log ('element', element);
         parler(element);
     })
     discution.forEach(parler); // Moyen simplificé de faire le commande au dessus