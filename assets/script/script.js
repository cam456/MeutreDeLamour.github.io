let chapters = {
    debut: {
        titre: "la mort",
        text:"Vous êtes à votre travail au IGA et il y a beaucoup de clients. Vous pensez prendre votre 15 min de pause en avance pour échapper aux clients. ",
        image: "./assets/image/IGA.jpg",
        boutons: [{
                titre: "prendre votre pause",
                destination: "policebad"
            },
            {
                titre: "Ne pas prendre votre pause",
                destination:"police"
            }
        ]

    },
    police: {
        titre: "la police",
        text:"La police est arrivée à votre travail et vous découvrez que votre amoureux/amoureuse est mort. Les policiers vous demandent de venir avec eux pour questionnement.",
        image: "./assets/image/policier.jpg",
        boutons: [{
                titre: "aller avec la police",
                destination:"stationPolice"
            },
            {
                titre: "ne pas aller avec la police",
                destination:"arrestation1"
            }
        ]
    },

    policebad: {
        titre: "la police",
        text:"La police est arrivée à votre travail et vous découvrez que votre amoureux/amoureuse est mort. Les policiers vous demandent de venir avec eux pour questionnement.",
        image: "./assets/image/policier.jpg",
        boutons: [{
                    titre: "aller avec la police",
                    destination:"stationPolice"
                },
                {
                    titre: "ne pas aller avec la police",
                    destination:"arrestation1"
                }
        ]   

    },

    stationPolice: {
        titre: "embarquement",
        text: "La police vous ramène dans la voiture pour ensuite aller à la station de police. Rendue là-bas, la police commence à vous questionner. Elles vous demande où vous étiez le 21 septembre",
        image: "./assets/image/stationPolice.jpg",
        boutons: [{
                titre: " ne pas dire où vous étiez le 21 septembre",
                destination:"arrestation2"
            },
            {
                titre: "dire où vous étiez le 21 septembre",
                destination:"Questionnement"
            }
        ]

    },
    Questionnement: {
        titre: "Questionnement",
        text: "La police vous demande quand était la dernière fois que vous avez vue votre amoureux/amoureuse.",
        image: "./assets/image/interogation.jpg",
        boutons: [{
                titre: "dire que vous l'avez vue le matin du 21 septembre",
                destination:"arrestation3"
            },
            {
                titre: "dire que vous étiez au travail",
                destination:"VraiAmour"
            }
        ]

    },
    VraiAmour: {
        titre: "Le vrai amour",
        text: "La police vous demande si vous aimez vraiment votre amoureuse/amoureux.",
        image: "./assets/image/vraiAmour.jpg",
        boutons: [{
                titre: "ne pas crier et demander un avocat ",
                destination:"avocat"
            },
            {
                titre: "crier que vous l'aimez et que vous voulez un avocat",
                destination:"avocat"
            }
        ]

    },
    avocat: {
        titre: "Le sauveur",
        text: "Après que votre avocat soit arrivé, vous lui dites que vous n'avez pas tué votre amoureuse/amoureux. Votre avocat vous demande ce que vous avez dit à la police.",
        image:"./assets/image/avocat.jpg",
        boutons: [{
                titre: "vous avez crier au policier",
                destination:"innocence"
            },
            {
                titre: "vous n'avez pas crier au policier",
                destination:"innocence"
            }
        ]

    },
    innocence: {
        titre: "notre innocence",
        text: "Votre avocat vous dit qu'elle va faire le plus possible pour que vous soyez prouvé innocent. Durant le procès, le juge vous demande si vous êtes innocent ou coupable. ",
        image: "./assets/image/innocencejpg",
        boutons: [{
                titre: "coupable",
                destination: "arrestation4"
            },
            {
                titre: "innocent",
                destination:"VraiAmour"
            }
        ]

    },
    juge: {
        titre: "Juge",
        text: "Après quelques heures, votre avocat est presque capable de prouver votre innocence.",
        image: "./assets/image/juge.jpg",
        boutons: [{
            titre: "suivent",
            destination:"verdicte"
        }, ]

    },
    verdicte: {
        titre: "VERDICTE",
        text: "Lorsque la police a essayé de vous parler, vous les avez accompagné sans résistance, cela prouve que vous n'aviez rien à cacher et que vous êtes innocent.",
        image: "./assets/image/verdicte.jpg",
        boutons: [
            {
            titre: "recommencer",
            destination:"debut"
        },

        
    ]

    },
    mauvaisVerdicte: {
        titre: "VERDICTE",
        text: "Lorsque la police a essayé de vous parler, vous ne les aviez pas accompagnées car vous êtes aller en pause. Cela prouve au juge que vous cachiez quelque chose et que vous avez tuer votre amoureux/amoureuse.",
        image: "./assets/image/mauvais_verdicte.jpg",
        boutons: [{
            titre: "recommencer",
            destination:"debut"
        }]

    },

    arrestation1: {
        titre: "La prison",
        text: "Vous avez resister l'arrestation et vous êtes envoyé en prison.",
        image: "./assets/image/prison1.jpg",
        boutons: [{
            titre: "recommencer",
            destination:"debut"
        }]

    },

    arrestation2: {
        titre: "La prison",
        text: " La police savait déjà où vous étiez le premier septembre. Il vous arrête à cause de votre mensonge.",
        image: "./assets/image/prison2.jpg",
        boutons: [{
            titre: "recommencer",
            destination:"debut"
        }]

    },

    arrestation3: {
        titre: "La prison",
        text: " La police procède à l'arrestation car vous étiez la dernière personne à avoir vue votre amoureuse/amoureux.",
        image: "./assets/image/prison3.jpg",
        boutons: [{
            titre: "recommencer",
            destination:"debut"
        }]

    },

    arrestation4: {
        titre: "La prison",
        text: "Vous avez avoué que vous étiez coupable et le juge vous donne la prison à vie.",
        image: "./assets/image/prison4.jpg",
        boutons: [{
            titre: "recommencer",
            destination:"debut"
        }]

    },

    
}


let twist = false;



function goToChapter(cle) {
    let chapitre = chapters[cle];
    console.log(chapitre.titre)
    console.log(chapitre.text)
    document.getElementById('titre').innerHTML = chapitre.titre;
    document.getElementById('explication').innerHTML = chapitre.text;
    document.getElementById('image').src = chapitre.image;
    

    const boutons = document.getElementById('boutons');

    boutons.innerHTML = '';

    if(chapter == 'policeBad'){
        twist=true;


    }


    for(let i = 0; i < chapitre.boutons.length; i++){
        console.log(chapitre.boutons[i].destination)

        const nouveauBtn = document.createElement('button'); 
  
        nouveauBtn.textContent = chapitre.boutons[i].titre; 
      
        nouveauBtn.addEventListener('click', () => {
      
          goToChapter(chapitre.boutons[i].destination) 

          
      
        }); 
        boutons.appendChild(nouveauBtn); 

        if(chapter == 'verdicte' && twist == true){
            goToChapter("mauvaisVerdicte")


        }

             
    }
}


goToChapter('debut');