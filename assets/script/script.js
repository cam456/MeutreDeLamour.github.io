let chapters = {
    debut: {
        titre: "la mort",
        text: " Vous Vous étes a votre job au IGA Il y a beaucoup de client mais vous penser prendre votre 15min de pause en avance ",
        image: "./assets/image/IGA.jpg",
        boutons: [{
                titre: "prendre votre pause",
                destination: "police"
            },
            {
                titre: "prendre votre pause",
                destination: "police"
            }
        ]

    },
    police: {
        titre: "la police",
        text: "la police vien a votre travail et vous découvrer que votre amoureux/amoureuse et mort,La police vous demande de venir avec eux ",
        image: "./assets/image/policier.jpg",
        boutons: [{
                titre: "aller avec la police",
                destination: "stationPolice"
            },
            {
                titre: "ne pas aller avec la police",
                destination: "arrestation"
            }
        ]

    },
    stationPolice: {
        titre: "embarquement",
        text: "La police vous ramenne dans la voiture pour ensuite vous ramenner a la station Rendu a la station la police commence a vous questionner et vous demande ou vous étier le 21 septembre",
        image: "./assets/image/stationPolice.jpg",
        boutons: [{
                titre: " dire ou vous étier le 21 septembre",
                destination: "arrestation"
            },
            {
                titre: "ne pas ment",
                destination: "questionnement"
            }
        ]

    },
    Questionnement: {
        titre: "Questionnement",
        text: "La police vous demande quand étais la derniere fois que vous avez vue vote amoureux/amoureuse",
        image: "./assets/image/interogation.jpg",
        boutons: [{
                titre: "dire que vous l'avez vue le matin du 21 septembre",
                destination: "arrestation"
            },
            {
                titre: "dire que vous étier au travail",
                destination: "VraiAmour"
            }
        ]

    },
    VraiAmour: {
        titre: "Le vrai amour",
        text: "La police vous demande si vous aimer vraiment votre amoureuse/amoureux",
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
        text: "Apres que l'avocat soir venu vous diser a votre avocat que n'avez pas tuer, votre avocat vous demande si vous avez crier au policer",
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
        text: "Votre avocat vous dit qu'elle va faire le plus posible pour vous prouver innocent. Durant le procès je juge vous demande si vous étes innocent ou coupable ",
        image: "./assets/image/innocencejpg",
        boutons: [{
                titre: "innocent",
                destination: "arrestation"
            },
            {
                titre: "coupable",
                destination: "VraiAmour"
            }
        ]

    },
    juge: {
        titre: "Juge",
        text: "Après votre advocat est capable de presque vous prouvez innocent",
        image: "./assets/image/juge.jpg",
        boutons: [{
            titre: "suivent",
            destination: "verdicte"
        }, ]

    },
    verdicte: {
        titre: "VERDICTE",
        text: "Lorsque la police a essayer de vous parler vous les avais accompagner sans resistance, cela prouve que vous n'Avier rien a cacher et que vous étes innocent ",
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
        text: "Lorsque la police a essayer de vous parler vous ne les avais pas accompagner car vous étes aller en pause.Cela prouve au juge que vous caher quelque chose et que vous avez tuer votre amoureux/amoureuse ",
        image: "./assets/image/mauvais_verdicte.jpg",
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