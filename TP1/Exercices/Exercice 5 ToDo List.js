const readline = require('readline');                                                     // Importation du module readline pour créer une interface de ligne de commande
const fs = require('fs');                                                                 // Importation du module fs pour manipuler les fichiers
const rl = readline.createInterface({                                                     // Création d'une interface readline pour lire depuis le terminal et écrire dans le terminal
  input: process.stdin,                                                                   // Utilisation de process.stdin pour lire depuis le terminal
  output: process.stdout                                                                  // Utilisation de process.stdout pour écrire dans le terminal
});
const todoListFile = 'todo_list.txt';                                                     // Définition du chemin du fichier où sera stockée la liste ToDo


function chargerToDoList() {                                                              // Fonction pour charger la liste ToDo depuis le fichier
  if (fs.existsSync(todoListFile)) {                                                      // Vérifie si le fichier existe
    const data = fs.readFileSync(todoListFile,);                                          // Si le fichier existe, lit son contenu
    return JSON.parse(data);                                                              // Parse les données JSON et les retourne
  } else {
    return [];                                                                            // Si le fichier n'existe pas, retourne un tableau vide
  }
}


function enregistrerToDoList(todoList) {                                                  // Fonction pour enregistrer la liste ToDo dans le fichier
  fs.writeFileSync(todoListFile, JSON.stringify(todoList, null, 2));                    // Convertit la liste ToDo en format JSON et l'écrit dans le fichier

}



function afficherToDoList(todoList) {                                                      // Fonction pour afficher la liste ToDo dans le terminal
  if (todoList.length === 0) {                                                              // Vérifie si la liste ToDo est vide  
    console.log("Votre ToDo list est vide !");                                              // Affiche un message si la liste est vide
  } else {
    console.log("Voici votre ToDo list :");                                                 // Affiche la liste ToDo avec les numéros de tâche et les instructions
    todoList.forEach(function(element, index) {
      console.log((index + 1) + "." + element.tache);     
      if (element.instructions && element.instructions.length > 0) {                        // Vérifie si des instructions existent pour cette tâche      
        console.log("Instructions : " + element.instructions);                              // Affiche les instructions s'il y en a
      }
    });
  }
}


function ajouterElementToDoList(todoList, tache, instructions) {                            // Fonction pour ajouter une nouvelle tâche à la liste ToDo
  todoList.push({ tache: tache, terminee: false, instructions: instructions });             // Ajoute un nouvel objet tâche à la liste ToDo avec ses propriétés 
  console.log("\"" + tache + "\" a été ajouté à votre ToDo list.");                         // Affiche un message indiquant que la tâche a été ajoutée
}



function modifierInstructionsTache(todoList, index, nouvellesInstructions) {                  // Fonction pour modifier les instructions d'une tâche spécifique 
  if (index >= 0 && index < todoList.length) {                                               // Vérifie si l'index est valide   
    todoList[index].instructions = nouvellesInstructions;                                     // Modifie les instructions de la tâche à l'index spécifi    
    console.log("Les instructions de la tâche ont été modifiées avec succès.");               // Affiche un message indiquant que les instructions ont été modifiées  
  } else {    
    console.log("Index invalide. Veuillez entrer un index valide.");                          // Affiche un message d'erreur si l'index est invalide
  }
}

function supprimerElementToDoList(todoList, index) {
  if (index >= 0 && index < todoList.length) {                                               // Vérifie si l'index est valide   
    todoList.splice(index, 1);                                                                // Splice pour supprimer l'élément de l'index
    console.log("L'élément est supprimé avec succes");               // Affiche un message indiquant que les instructions ont été modifiées  
  } else {    
    console.log("Index invalide. Veuillez entrer un index valide.");                          // Affiche un message d'erreur si l'index est invalide
  }
}

let todoList = chargerToDoList();                                                             // Chargement initial de la liste ToDo depuis le fichier



rl.question('Voulez-vous ajouter, consulter, modifier ou supprimer des éléments de votre ToDo list ? (ajouter/consulter/modifier/supprimer) : ', function(answer) { // Question posée à l'utilisateur pour choisir une action à effectuer sur la liste ToDo
  
  if (answer.toLowerCase() === 'ajouter') {                                                   // Si l'utilisateur choisit d'ajouter une tâche    
    rl.question('Entrez l\'élément que vous souhaitez ajouter à votre ToDo list : ', function(tache) {  // Demande à l'utilisateur de saisir la tâche et les instructions
      rl.question('Entrez les instructions pour cette tâche : ', function(instructions) {       
        ajouterElementToDoList(todoList, tache, instructions);                                // Ajoute la nouvelle tâche avec les instructions saisies       
        enregistrerToDoList(todoList);                                                        // Enregistre la liste ToDo mise à jour dans le fichier    
        rl.close();                                                                           // Ferme l'interface readline
      });
    });


  } else if (answer.toLowerCase() === 'consulter') {                                             // Si l'utilisateur choisit de consulter la liste ToDo
    afficherToDoList(todoList);                                                                   // Affiche la liste ToDo dans le terminal        
                                                                                                                                                           
  } else if (answer.toLowerCase() === 'modifier') {  
    rl.question('Entrez l\'index de la tâche que vous souhaitez modifier : ', function(indexStr) {   // Si l'utilisateur choisit de modifier une tâche
                                                                                                       // Demande à l'utilisateur de saisir l'index de la tâche à modifier 
      const index = parseInt(indexStr) - 1;                                                             // Convertit l'index saisi en nombre entier
      rl.question('Entrez les nouvelles instructions pour cette tâche : ', function(nouvellesInstructions) {  // Demande à l'utilisateur de saisir les nouvelles instructions pour la tâche        
        modifierInstructionsTache(todoList, index, nouvellesInstructions);                                  // Modifie les instructions de la tâche à l'index spécifié
        enregistrerToDoList(todoList);                                                                      // Enregistre la liste ToDo mise à jour dans le fichier
        rl.close();                                                                                     // Ferme l'interface readline
      });
    });
  } else if (answer.toLowerCase() === 'supprimer') {
    rl.question('Entrez l\'intex de la tâche que vous souhaitez supprimer :', function(indexStr) {
      const index = parseInt(indexStr) - 1; 
      supprimerElementToDoList(todoList, index);
      enregistrerToDoList(todoList);
      rl.close();
    })
  } else {
    console.log('Commande non reconnue.');                                                                // Si la commande n'est pas reconnue
                                                                                                            // Affiche un message d'erreur
    rl.close();                                                                                           // Ferme l'interface readline
  }
});




rl.on('close', function() {                                                                               // Gestion de l'événement lorsque l'utilisateur ferme l'interface readline
  console.log('Au revoir !');                                                                             // Affiche un message de sortie
  process.exit(0);                                                                                        // Termine le processus Node.js
});