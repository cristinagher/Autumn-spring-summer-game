// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
//identificar elementos

const fightScore = document.getElementById('score');
const userScore = document.getElementById('score-user');
const pcScore = document.getElementById('score-pc');
const winner = document.getElementById('winner-text');
const autumnButton = document.getElementById('autumn-season');
const springButton = document.getElementById('spring-season');
const summerButton = document.getElementById('summer-season');

let userChoice;
let pcChoice;
let userImage;
let pcImage;

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
        url: "../assets/images/verano2.jpg"
    }
];

// Generar una opción aleatoria para la PC
const randomNumber = () => {
    const theActualNumber = Math.floor(Math.random() * 3);
    return gameOptions[theActualNumber];
};

const choicePc = () => {
    let random = randomNumber();
    pcChoice = random.name; // Obtener el nombre de la opción de la PC
    pcImage = random.url;   // Obtener la imagen de la opción de la PC
    fightResults();
};

// Evaluar el resultado del juego
const fightResults = () => {
    if (userChoice === pcChoice) {
        winner.innerHTML = "¡Empate!";
    } else if (
        (userChoice === "Autumn" && pcChoice === "Spring") ||
        (userChoice === "Spring" && pcChoice === "Summer") ||
        (userChoice === "Summer" && pcChoice === "Autumn")
    ) {
        winner.innerHTML = "¡Ganas tú! :)";
        updateScore(userScore);
    } else {
        winner.innerHTML = "¡Pierdes tú! :(";
        updateScore(pcScore);
    }
    addImages();
};

// Actualizar las imágenes del jugador y la PC
const addImages = () => {
    userImage = gameOptions.find(option => option.name === userChoice)?.url;
    console.log(`Tu elección: ${userChoice}, Imagen: ${userImage}`);
    console.log(`Elección de la PC: ${pcChoice}, Imagen: ${pcImage}`);
};

// Actualizar el marcador
const updateScore = (element) => {
    element.textContent = parseInt(element.textContent) + 1;
};

// Manejar la elección del usuario
const handleUserChoice = (choice) => {
    userChoice = choice;
    choicePc();
};

// Agregar event listeners a los botones
autumnButton.addEventListener('click', () => handleUserChoice("Autumn"));
springButton.addEventListener('click', () => handleUserChoice("Spring"));
summerButton.addEventListener('click', () => handleUserChoice("Summer"));