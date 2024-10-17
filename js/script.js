function afficheTable() {
  let nombre = document.querySelector("#nombre").value;

  if (nombre >= 1 && nombre <= 20) {  
      
      let table = "";

      for (let i = 1; i <= nombre; i++) {  // Boucle jusqu'à 'nombre', ici 20.
          let valeurDe = Math.floor(Math.random() * 6) + 1; // Génère un nombre entre 1 et 6
          let ligne = '<div>Dé n°' + i + ' = ' + valeurDe + '</div>';
          table += ligne;
      }

      // Affichage de la table des dés
      document.querySelector(".resultat").innerHTML = table;
  }
}
