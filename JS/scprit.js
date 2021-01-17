
// ********************************** Animation Image index.html*******************************************************

// Création du tableau 

let dessin = [
    [
        "/assets/pictures/normal-pictures/Pastel (1).jpg", 
        "Marilyn Monroe (crayon pastel sanguine)",
    ],
    [
        "/assets/pictures/normal-pictures/graphite (2).jpg", 
        "Mineur de Fond (au crayon graphite)"
    ],
    [
        "/assets/pictures/normal-pictures/graphite (16).jpg", 
        "Portrait d'une jeune fille avec un coquelicot(crayon graphite Ecoline et encre de chine)"
    ],
    [
        "/assets/pictures/normal-pictures/graphite (15).jpg", 
        "Coquelicot (Crayon Graphite et Ecoline)"
    ],
    [
        "/assets/pictures/normal-pictures/paysage (1).jpg", 
        "Cap Blanc Nez (peinture à l'huile)"
    ],
    [
        "/assets/pictures/normal-pictures/Pastel (9).jpg", 
        "Dessin de lion au crayon Sanguine (pastel crayon sanguine)"
    ],
    [
        "/assets/pictures/normal-pictures/Pastel (3).jpg", 
        "Le cheval enchanteur (pastel crayon sanguine)"
    ],
    [
        "/assets/pictures/normal-pictures/graphite (11).jpg", 
        "La dame au chapeau (Crayon Graphite et Ecoline)"
    ],
    [
        "/assets/pictures/normal-pictures/paysage (4).jpg", 
        "Phare de Rania (Crête) d'après photo personnelle peinture à l'huile"
    ],
    [
        "/assets/pictures/normal-pictures/graphite (3).jpg", 
        "Céline (au crayon graphite)"
    ],
    [
        "/assets/pictures/normal-pictures/graphite (17).jpg", 
        "Femme chat (mine graphite, encre et pastel)"
    ],
    [
        "/assets/pictures/normal-pictures/fleurs (28).jpg", 
        "Fleurs Sauvages (Peinture à l'acrylique)"
    ],
    [
        "/assets/pictures/normal-pictures/Pastel (6).jpg", 
        "Jeune femme de dos (crayon pastel sanguine)"
    ],
    [
        "/assets/pictures/normal-pictures/graphite (22).jpg", 
        "Le chat bleu et le papillon ou le chat aux yeux couleur or"
    ],
    [
        "/assets/pictures/normal-pictures/Pastel (17).jpg", 
        "dessin au pastel, encre de couleur, Hibiscus Colibri et fleurs"
    ],
    [
        "/assets/pictures/normal-pictures/graphite (23).jpg", 
        "Portrait d'enfant (mine graphite)"
    ],
    [
        "/assets/pictures/normal-pictures/modele feminin (2).jpg", 
        "Féria techniques mixtes sans cadre)"
    ],
    [
        "/assets/pictures/normal-pictures/graphite (19).jpg", 
        "Mariée de dos (Mine Graphite Pastel Encre de Chine)"
    ],
    [
        "/assets/pictures/normal-pictures/graphite (9).jpg", 
        "Portrait d'un jeune fille (Crayon Graphite et Ecoline)"
    ],
    [
        "/assets/pictures/normal-pictures/modele feminin (1).jpg", 
        "Regard (Peinture à l'acrylique)"
    ]
];

// Création des variables 

let image = document.querySelector("#image");
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
  
window.setInterval(animation, 4000);
  


  


