// Création du tableau 

let dessin = [
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe (crayon pastel sanguine)",
    ],
    [
        "assets/pictures/normal-pictures/119756996.jpg", 
        "Mineur de Fond (au crayon graphite)"
    ],
    [
        "assets/pictures/normal-pictures/124598811.jpg", 
        "crayon graphite Ecoline et encre de chine"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/124960494.jpg", 
        "Dessin de lion au crayon Sanguine (pastel)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/118071530.jpg", 
        "Marilyn Monroe(crayon pastel sanguine)"
    ]
];

// Création des variables 

let image = document.querySelector("image");
let title= document.querySelector("#title")
let dernier = 0;
let nombreAleatoire = 0;

// Fonction permettant de générer un nombre aléatoire
const genererNombreEntier = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

//Generation de la variable aléatoire

const animation = () => {
    do {
      nombreAleatoire = genererNombreEntier(dessin.length);
    } while (nombreAleatoire == dernier);
    
    // li n°0
    image.setAttribute("src", dessin[nombreAleatoire][0]);
    title.textContent = dessin[nombreAleatoire][1];
    dernier = nombreAleatoire;
  };
  
animation();
  
  window.setInterval(animation, 5000);
  