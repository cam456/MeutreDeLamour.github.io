let chapters = {
    debut: {
        titre : "la mort" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : [ 
        { titre : "prendre votre pause",  destination: "police" },
        { titre : "prendre votre pause",  destination: "police" }
        ]  

    },
    police: {
        titre : "la police" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : [
            { titre : "aller avec la police",  destination: "stationPolice" },
            { titre : "ne pas aller avec la police",  destination: "arrestation" }
        ]  

    },
    stationPolice: {
        titre : "embarquement" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : [
            { titre : "mentir a la police",  destination: "arrestation" },
            { titre : "ne pas ment",  destination: "questionnement" }
        ]  

    },
    Questionnement: {
        titre : "Questionnement" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : [
            { titre : "dire ou vous étier le 21 septembre",  destination: "arrestation" },
            { titre : "ne pas ment",  destination: "VraiAmour" }
        ]  

    },
    VraiAmour: {
        titre : "Le vrai amour" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : [
            { titre : "ne pas crier et demander un advocat ",  destination: "avocat" },
            { titre : "crier que vous l'aimer et que vous voulez un advocat",  destination: "avocat" }
    ]  

    },
    avocat: {
        titre : "Le sauveur" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : [
            { titre : "vous avez crier au policier",  destination: "innocence" },
            { titre : "vous avez pas crier au policier",  destination: "innocence" }
        ]  

    },
    innocence: {
        titre : "notre innocence" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : [
            { titre : "innocent",  destination: "arrestation" },
            { titre : "coupable",  destination: "VraiAmour" }
        ]  

    },
    juge: {
        titre : "Juge" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : [
            { titre : "suivent",  destination: "verdicte" },
        ]  

    },
    verdicte: {
        titre : "VERDICTE" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : [
            { titre : "recommencer",  destination: " debut" },
        ]  

    },
    mauvaisVerdicte: {
        titre : "VERDICTE" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : [
            { titre : "recommencer",  destination: " debut" }
        ]  

    },
}



function goToChapter(cle){
let chapitre = chapters[cle];
console.log (chapitre.titre)
console.log(chapitre.text)
// affiche le text
// boucle a travers les boutons
// dans la boucle, affiche bouton.destination.


}

goToChapter('debut');

