let chapters = {
  debut: {
    titre: "la mort",
    text: "Vous êtes à votre travail au IGA et il y a beaucoup de clients. Vous pensez prendre votre 15 min de pause en avance pour échapper aux clients. ",
    image: "./assets/image/IGA.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",

    boutons: [
      {
        titre: "prendre votre pause",
        destination: "policebad",
      },
      {
        titre: "Ne pas prendre votre pause",
        destination: "police",
      },
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },
  police: {
    titre: "la police",
    text: "La police est arrivée à votre travail et vous découvrez que votre amoureux/amoureuse est mort. Les policiers vous demandent de venir avec eux pour questionnement.",
    image: "./assets/image/policier.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    video: "./assets/video/police2.mp4",
    boutons: [
      {
        titre: "aller avec la police",
        destination: "stationPolice",
      },
      {
        titre: "ne pas aller avec la police",
        destination: "arrestation1",
      },
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },

  policebad: {
    titre: "la police",
    text: "La police est arrivée à votre travail et vous découvrez que votre amoureux/amoureuse est mort. Les policiers vous demandent de venir avec eux pour questionnement.",
    image: "./assets/image/policier.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    video: "./assets/video/police2.mp4",
    boutons: [
      {
        titre: "aller avec la police",
        destination: "stationPolice",
      },
      {
        titre: "ne pas aller avec la police",
        destination: "arrestation1",
      },
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },

  stationPolice: {
    titre: "embarquement",
    text: "La police vous ramène dans la voiture pour ensuite aller à la station de police. Rendue là-bas, la police commence à vous questionner. Elles vous demande où vous étiez le 21 septembre",
    image: "./assets/image/stationPolice.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    boutons: [
      {
        titre: " ne pas dire où vous étiez le 21 septembre",
        destination: "arrestation2",
      },
      {
        titre: "dire où vous étiez le 21 septembre",
        destination: "Questionnement",
      },
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },
  Questionnement: {
    titre: "Questionnement",
    text: "La police vous demande quand était la dernière fois que vous avez vue votre amoureux/amoureuse.",
    image: "./assets/image/interogation.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    boutons: [
      {
        titre: "dire que vous l'avez vue le matin du 21 septembre",
        destination: "arrestation3",
      },
      {
        titre: "dire que vous l'avez vue il y a 2 jour",
        destination: "VraiAmour",
      },
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },
  VraiAmour: {
    titre: "Le vrai amour",
    text: "La police vous demande si vous aimez vraiment votre amoureuse/amoureux.",
    image: "./assets/image/vraiAmour.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    boutons: [
      {
        titre: "ne pas crier et demander un avocat ",
        destination: "avocat",
      },
      {
        titre: "crier que vous l'aimez et que vous voulez un avocat",
        destination: "avocat",
      },
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },
  avocat: {
    titre: "Le sauveur",
    text: "Après que votre avocat soit arrivé, vous lui dites que vous n'avez pas tué votre amoureuse/amoureux. Votre avocat vous demande ce que vous avez dit à la police.",
    image: "./assets/image/avocat.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    boutons: [
      {
        titre: "vous avez crier au policier",
        destination: "innocence",
      },
      {
        titre: "vous n'avez pas crier au policier",
        destination: "innocence",
      },
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },
  innocence: {
    titre: "notre innocence",
    text: "Votre avocat vous dit qu'elle va faire le plus possible pour que vous soyez prouvé innocent. Durant le procès, le juge vous demande si vous êtes innocent ou coupable. ",
    image: "./assets/image/innocence.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    boutons: [
      {
        titre: "coupable",
        destination: "arrestation4",
      },
      {
        titre: "innocent",
        destination: "juge",
      },
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },
  juge: {
    titre: "Juge",
    text: "Après quelques heures, votre avocat est presque capable de prouver votre innocence.",
    image: "./assets/image/juge.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    video: "./assets/video/juge2.mp4",
    boutons: [
      {
        titre: "suivant",
        destination: "verdicte",
      },

      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },

  verdicte: {
    titre: "VERDICTE",
    text: "Lorsque la police a essayé de vous parler, vous les avez accompagné sans résistance, cela prouve que vous n'aviez rien à cacher et que vous êtes innocent.",
    image: "./assets/image/verdicte.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    boutons: [
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },

  mauvaisVerdicte: {
    titre: "VERDICTE",
    text: "Lorsque la police a essayé de vous parler, vous ne les aviez pas accompagnées car vous êtes aller en pause. Cela prouve au juge que vous cachiez quelque chose et que vous avez tuer votre amoureux/amoureuse.",
    image: "./assets/image/mauvais_verdicte.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    boutons: [
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },

  arrestation1: {
    titre: "La prison",
    text: "Vous avez resister l'arrestation et vous êtes envoyé en prison.",
    image: "./assets/image/prison1.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    boutons: [
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },

  arrestation2: {
    titre: "La prison",
    text: " La police savait déjà où vous étiez le premier septembre. Il vous arrête à cause de votre mensonge.",
    image: "./assets/image/prison2.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    video: "./assets/video/prison1.5.mp4",
    boutons: [
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },

  arrestation3: {
    titre: "La prison",
    text: " La police procède à l'arrestation car vous étiez la dernière personne à avoir vue votre amoureuse/amoureux.",
    image: "./assets/image/prison3.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    boutons: [
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },

  arrestation4: {
    titre: "La prison",
    text: "Vous avez avoué que vous étiez coupable et le juge vous donne la prison à vie.",
    image: "./assets/image/prison4.jpg",
    audio: "./assets/sound/Squeaky_Anime_Sound.mp3",
    boutons: [
      {
        titre: "recommencer",
        destination: "debut",
      },
    ],
  },
};

let twist = false;

function playSound(squeky) {
  let audio = new Audio(squeky);
  audio.loop = false;
  audio.play();

}

document.getElementById("boutons").onclick = function () {
  playSound("./assets/sound/Squeaky_Anime_Sound.mp3");
};

function goToChapter(cle) {
  let chapitre = chapters[cle];
  console.log(chapitre.titre);
  console.log(chapitre.text);
  document.getElementById("titre").innerHTML = chapitre.titre;
  document.getElementById("explication").innerHTML = chapitre.text;
 // document.getElementById("image").src = chapitre.image;//

  const boutons = document.getElementById("boutons");

  boutons.innerHTML = "";

  if (cle == "debut") {
    twist = false;
  }

  if (cle == "policebad") {
    twist = true;
  }

  if (cle == "verdicte" && twist == true) {
    goToChapter("mauvaisVerdicte");
  }

  for (let i = 0; i < chapitre.boutons.length; i++) {
    console.log(chapitre.boutons[i].destination);

    const nouveauBtn = document.createElement("button");

    nouveauBtn.textContent = chapitre.boutons[i].titre;

    nouveauBtn.addEventListener("click", () => {
      goToChapter(chapitre.boutons[i].destination);
    });

    boutons.appendChild(nouveauBtn);
  }

  const media = document.querySelector(".media");
  
 


  media.innerHTML = "";
  if (chapitre.video) {
    const video = document.createElement("video");
    video.src = chapitre.video;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    media.appendChild(video);
  } else {
    const image = document.createElement("img");
    image.classList.add('image');
    image.src = chapitre.image;
    media.appendChild(image);
  
  }



localStorage.setItem('cle', cle)

  const reinitialiser = document.querySelector(".recommencer");
  reinitialiser.addEventListener("click", function () {
    localStorage.clear();
    goToChapter("debut");
  });


  let finalChapter = localStorage.getItem("verdicte");

  if (finalChapter === "mauvaisVerdicte") {
    chapters["debut"].boutons[0].destination = "policebad";
  }

  if (finalChapter === "verdicte") {
    chapters["debut"].boutons[0].destination = "police";
  }
  
}

if (localStorage.getItem("cle") !== null) {
    goToChapter(localStorage.getItem("cle") );
  } else {
    goToChapter('debut');
  }

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
  
  btn.addEventListener('click', function() {
    output.innerText = input.checked;
    input.checked = true;
  })

