// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
//identificar elementos

const fightScore = document.getElementById('score');
const userScore= document.getElementById('score-user');
const pcScore=document.getElementById('score-pc');
const winner=documnet.getElementById('winner-text');
const autumnButton=document.getElementById('autumn-season');
const springButton=document.getElementById('spring-season');
const summerButton=document.getElementById('summer-season');


let userChoice
let pcChoice
let userImage
let pcImage 

const gameOptions = [
    {
        name: "Autumn",
        url: "../assets/images/otoño1.jpg"
    },

    {
        name: "Spring",
        url: "../assets/images/spring2.jpg"
    },
    {
        name: "Summer",
        url: "../assets/images/verano2.jpg.jpg"
    }
];


const randomNumber = () => {
    const theActualNumber = Math.floor(Math.random() * 3);
    return gameOptions[theActualNumber];
};

const choicePc = () => {
    let random = randomNumber;
    if ( random == 0) {
        pcChoice = "Autumn"
    }
    else if (random == 1) {
        pcChoice = "Spring"
    } else {
        pcChoice= "Summer"
    };

    fightResults ();
}

const fightResults=() => {
    if(userChoice == pcChoice){
        winner.innerHTML="empate";
    } else if (userChoice=="Autumn" && pcChoice=="Spring") {
        winner.innerHTML="Ganas tú!!:)"
    } else if (userChoice=="Spring" && pcChoice == "Summer"){
        winner.innerHTML="Ganas tú!!:)"
    } else if (userChoice=="Summer" && pcChoice == "Autumn"){
        winner.innerHTML="Ganas tú!!:)"
    } else {
        winner.innerHTML="Pierdes tú :("
    };
    addImages ();
}

const addImages= () => {
    for (let i=0; i<gameOptions.length; i++) {
        if (userChoice==gameOptions[i].name) {
            userImage== gameOptions[i];
        }
    }
}