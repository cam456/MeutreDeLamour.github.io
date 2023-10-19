let chapters = {
    debut: {
        titre: "la mort",
        text: " Vous êtes à votre travail au IGA et il y a beaucoup de clients. Vous pensez prendre votre 15 min de pause en avance pour échapper aux clients. ",
        image: "./assets/image/IGA.jpg",
        boutons: [{
                titre: "prendre votre pause",
                destination: "police"
            },
            {
                titre: "Ne pas prendre votre pause",
                destination: "police"
            }
        ]

    },
    police: {
        titre: "la police",
        text: "La police est arrivée à votre travail et vous découvrez que votre amoureux/amoureuse et mort. Les policiers vous demandent de venir avec eux pour questionnement.",
        image: "./assets/image/policier.jpg",
        boutons: [{
                titre: "aller avec la police",
                destination: "stationPolice"
            },
            {
                titre: "ne pas aller avec la police",
                destination: "arrestation1"
            }
        ]

    },
    stationPolice: {
        titre: "embarquement",
        text: "La police vous ramène dans la voiture pour ensuite aller à la station de police. Rendue là-bas, la police commence à vous questionner. Elles vous demande ou vous étier le 21 septembre",
        image: "./assets/image/stationPolice.jpg",
        boutons: [{
                titre: " ne pas dire ou vous étier le 21 septembre",
                destination: "arrestation2"
            },
            {
                titre: "dire ou vous étier le 21 septembre",
                destination: "questionnement"
            }
        ]

    },
    Questionnement: {
        titre: "Questionnement",
        text: "La police vous demande quand étais la dernière fois que vous avez vue vote amoureux/amoureuse.",
        image: "./assets/image/interogation.jpg",
        boutons: [{
                titre: "dire que vous l'avez vue le matin du 21 septembre",
                destination: "arrestation3"
            },
            {
                titre: "dire que vous étier au travail",
                destination: "VraiAmour"
            }
        ]

    },
    VraiAmour: {
        titre: "Le vrai amour",
        text: "La police vous demande si vous aimez vraiment votre amoureuse/amoureux.",
        image: "./assets/image/vraiAmour.jpg",
        boutons: [{
                titre: "ne pas crier et demander un advocat ",
                destination: "avocat"
            },
            {
                titre: "crier que vous l'aimer et que vous voulez un advocat",
                destination: "avocat"
            }
        ]

    },
    avocat: {
        titre: "Le sauveur",
        text: "Après que votre avocat soit arrivé, vous lui dites que n'avez pas tuer votre amoureuse/amoureux. Votre avocat vous demande ce que vous avez dit à la police.",
        image: "./assets/image/avocatjpg",
        boutons: [{
                titre: "vous avez crier au policier",
                destination: "innocence"
            },
            {
                titre: "vous avez pas crier au policier",
                destination: "innocence"
            }
        ]

    },
    innocence: {
        titre: "notre innocence",
        text: "Votre avocat vous dit qu'elle va faire le plus possible pour que vous soyer prouvé innocent. Durant le procès, le juge vous demande si vous êtes innocent ou coupable. ",
        image: "./assets/image/innocencejpg",
        boutons: [{
                titre: "coupable",
                destination: "arrestation4"
            },
            {
                titre: "innocent",
                destination: "VraiAmour"
            }
        ]

    },
    juge: {
        titre: "Juge",
        text: "Après quelques heures, votre avocat est presque capable de vous prouver innocent.",
        image: "./assets/image/juge.jpg",
        boutons: [{
            titre: "suivent",
            destination: "verdicte"
        }, ]

    },
    verdicte: {
        titre: "VERDICTE",
        text: "Lorsque la police a essayé de vous parler vous les avez accompagner sans résistance, cela prouve que vous n'aviez rien à cacher et que vous êtes innocent.",
        image: "./assets/image/verdicte.jpg",
        boutons: [
            {
            titre: "recommencer",
            destination: " debut"
        },
    ]

    },
    mauvaisVerdicte: {
        titre: "VERDICTE",
        text: "Lorsque la police a essayé de vous parler, vous ne les aviez pas accompagnées, car vous êtes aller en pause. Cela prouve au juge que vous cachiez quelque chose et que vous avez tuer votre amoureux/amoureuse.",
        image: "./assets/image/mauvais_verdicte.jpg",
        boutons: [{
            titre: "recommencer",
            destination: " debut"
        }]

    },

    arrestation1: {
        titre: "La prison",
        text: "Vous avez resister l'arrestation que étes envoyer en prison.",
        image: "",
        boutons: [{
            titre: "recommencer",
            destination: " debut"
        }]

    },

    arrestation2: {
        titre: "La prison",
        text: " La police savait déjà ou vous étier le premier septembre. Elle vous arrête à cause de votre mensonge.",
        image: "",
        boutons: [{
            titre: "recommencer",
            destination: " debut"
        }]

    },

    arrestation3: {
        titre: "La prison",
        text: " La police procède a l'arrestation, car vous étier la dernière personne à avoir vue votre amoureuse/amoureux.",
        image: "",
        boutons: [{
            titre: "recommencer",
            destination: " debut"
        }]

    },

    arrestation4: {
        titre: "La prison",
        text: "Vous avez avoué que vous étiez coupable et le juge vous donne la prison à vie.",
        image: "",
        boutons: [{
            titre: "recommencer",
            destination: " debut"
        }]

    },

    
}




function goToChapter(cle) {
    let chapitre = chapters[cle];
    console.log(chapitre.titre)
    console.log(chapitre.text)
    document.getElementById('titre').innerHTML = chapitre.titre;
    console.log(chapitre.image)

    document.getElementById('image').src = chapitre.image;

    for(let i = 0; i < chapitre.boutons.length; i++){
        console.log(chapitre.boutons[i].destination)

    }


    // affiche le text
    // boucle a travers les boutons
    // dans la boucle, affiche bouton.destination.

}

goToChapter('verdicte');