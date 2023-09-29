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
            { titre : "ne pas ment",  destination: "questionnement" }
        ]  

    },
    VraiAmour: {
        titre : "Le vrai amour" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : []  

    },
    avocat: {
        titre : "Le sauveur" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : []  

    },
    innocence: {
        titre : "notre innocence" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : []  

    },
    juge: {
        titre : "Juge" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : []  

    },
    verdicte: {
        titre : "VERDICTE" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : []  

    },
    mauvaisVerdicte: {
        titre : "VERDICTE" ,
        text : "contenue premier chapitre",
        image : "/image/IGA.jpg",
        boutons : []  

    },
}



function goToChapter(cle){
let chapitre = chapters[cle];
console.log (chapitre.titre)

}

goToChapter('verdicte');

