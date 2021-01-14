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
        "Portrait (crayon graphite Ecoline et encre de chine)"
    ],
    [
        "assets/pictures/normal-pictures/124532719.jpg", 
        "Coquelicot (Crayon Graphite et Ecoline)"
    ],
    [
        "assets/pictures/normal-pictures/71714227.jpg", 
        "Cap Blanc Nez (peinture à l'huile)"
    ],
    [
        "assets/pictures/normal-pictures/124960494.jpg", 
        "Dessin de lion au crayon Sanguine (pastel crayon sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/119729708.jpg", 
        "Le cheval enchanteur (pastel crayon sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/123720273.jpg", 
        "La dame au chapeau (Crayon Graphite et Ecoline)"
    ],
    [
        "assets/pictures/normal-pictures/68236693.jpg", 
        "Phare de Rania (Crête) d'après photo personnelle peinture à l'huile"
    ],
    [
        "assets/pictures/normal-pictures/119891362.jpg", 
        "Céline (au crayon graphite)"
    ],
    [
        "assets/pictures/normal-pictures/126119151.jpg", 
        "Femme féline (mine graphite, encre et pastel)"
    ],
    [
        "assets/pictures/normal-pictures/77755694_p.jpg", 
        "Fleurs Sauvages (Peinture à l'acrylique)"
    ],
    [
        "assets/pictures/normal-pictures/123658669.jpg", 
        "Jeune femme de dos (crayon pastel sanguine)"
    ],
    [
        "assets/pictures/normal-pictures/127065057.jpg", 
        "Le chat bleu et le papillon ou le chat aux yeux couleur or"
    ],
    [
        "assets/pictures/normal-pictures/126811617.jpg", 
        "dessin au pastel, encre de couleur, Hibiscus Colibri et fleurs"
    ],
    [
        "assets/pictures/normal-pictures/127415241_o.jpg", 
        "Portrait d'enfant (mine graphite)"
    ],
    [
        "assets/pictures/normal-pictures/52596128_p.jpg", 
        "Féria techniques mixtes sans cadre)"
    ],
    [
        "assets/pictures/normal-pictures/126314702.jpg", 
        "Mariée de dos (Mine Graphite Pastel Encre de Chine)"
    ],
    [
        "assets/pictures/normal-pictures/123584120.jpg", 
        "Portrait d'un jeune fille (Crayon Graphite et Ecoline)"
    ],
    [
        "assets/pictures/normal-pictures/80457235_p.jpg", 
        "Visage de femme (Peinture à l'acrylique)"
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
  