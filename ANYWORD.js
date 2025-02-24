var height = 6; //number of guesses
var width = 5; //length of the word

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt

var gameOver = false;

let streak = 0; // Racha de victorias



// var word = "SQUID";


/** 
var wordList = [
    "avion", "cielo", "perro", "gatos", "nubes", "salto", "mango", "queso", "horno", "verde",
    "blusa", "danza", "lucio", "piano", "juego", "nieve", "silla", "trozo", "largo", "lucha",
    "tigre", "raton", "dardo", "llave", "calvo", "brisa", "vapor", "globo", "mitad", "fuego",
    "cerdo", "vuelo", "lente", "riego", "arbol", "campo", "regla", "tinta", "roble", "vacio",
    "truco", "bravo", "campo", "falso", "corto", "clavo", "limon", "pluma", "pasto", "nudos",
    "ancho", "luzco", "redes", "pulpo", "pobre", "curso", "mujer", "cable", "firme", "techo",
    "banco", "yerno", "monja", "nacer", "carga", "letra", "miedo", "fuego", "llama", "traje",
    "metal", "ducha", "perla", "saber", "lucha", "peine", "torre", "horno", "suelo", "tarde",
    "saldo", "nadar", "broma", "plato", "motos", "piano", "cerco", "bajar", "corto", "broma",
    "dados", "clima", "justo", "baile", "lanza", "trato", "cinta", "serio", "cesta", "vigor",
    "joven", "matar", "terco", "regla", "feliz", "citar", "grano", "lecho", "huevo", "senda",
    "votar", "mando", "rango", "sello", "falla", "crema", "bello", "truco", "final", "sobra",
    "truco", "anexo", "mueve", "banda", "primo", "justa", "viejo", "rueda", "mitad", "punto",
    "lapiz", "vital", "bravo", "caida", "dicho", "mover", "grito", "barco", "cazar", "rayos",
    "sexto", "jamas", "negro", "silla", "fuera", "barro", "lindo", "susto", "manso", "tarea",
    "denso", "freno", "rugir", "pobre", "mirar", "cerca", "rocas", "lleno", "luzco", "ritmo",
    "suave", "campo", "jarra", "pasto", "lucha", "rampa", "lomos", "veloz", "gasto", "carro",
    "cabra", "vigas", "calor", "sabio", "globo", "carga", "suelo", "mojar", "macho", "tinta",
    "broma", "sorda", "tropa", "listo", "milla", "choza", "salto", "sobra", "verde", "fruta",
    "ruina", "traje", "dardo", "sueno", "trono", "lucir", "falsa", "fuego", "canto", "hojas",
    "siglo", "plaza", "negro", "pacto", "techo", "trama", "rapto", "madre", "reses", "perla",
    "oasis", "ciclo", "valle", "corto", "siglo", "sobra", "marca", "robar", "busto", "lugar",
    "regla", "listo", "suelo", "lomos", "denso", "lucha", "pista", "raton", "claro", "dardo",
    "voces", "lucha", "viejo", "mojar", "torpe", "lapso", "brisa", "luzco", "suelo", "firme"
];

*/

/** 
var guessList = ["lucha", "torta"]

guessList = guessList.concat(wordList);

**/

var wordList = [
    { word: "avion", category: "Transporte" },
    { word: "coche", category: "Transporte" },
    { word: "barco", category: "Transporte" },

    { word: "perro", category: "Animal" },
    { word: "lince", category: "Animal" },
    { word: "zorro", category: "Animal" },
    { word: "cebra", category: "Animal" },
    { word: "tigre", category: "Animal" },
    { word: "leona", category: "Animal" },
    { word: "burro", category: "Animal" },
    { word: "cerdo", category: "Animal" },
    { word: "cabra", category: "Animal" },
    { word: "cisne", category: "Animal" },
    { word: "erizo", category: "Animal" },
    { word: "gallo", category: "Animal" },
    { word: "pulpo", category: "Animal" },
    { word: "raton", category: "Animal" },
    { word: "hiena", category: "Animal" },
    { word: "panda", category: "Animal" },
    { word: "cobra", category: "Animal" },
    { word: "lemur", category: "Animal" },
    { word: "ligre", category: "Animal" },
    { word: "llama", category: "Animal" },

    { word: "mosca", category: "Insecto" },
    { word: "abeja", category: "Insecto" },

    { word: "piano", category: "Instrumento" },
    { word: "chelo", category: "Instrumento" },
    { word: "bombo", category: "Instrumento" },
    { word: "banyo", category: "Instrumento" },
    { word: "gaita", category: "Instrumento" },
    { word: "conga", category: "Instrumento" },

    { word: "chile", category: "País" },
    { word: "rusia", category: "País" },
    { word: "china", category: "País" },
    { word: "japon", category: "País" },
    { word: "malta", category: "País" },
    { word: "siria", category: "País" },

    { word: "negro", category: "Color" },
    { word: "verde", category: "Color" },

    { word: "silla", category: "Clase" },
    { word: "regla", category: "Clase" },
    { word: "lapiz", category: "Clase" },
    { word: "clase", category: "Clase" },
    { word: "libro", category: "Clase" },

    { word: "laura", category: "Nombre" },
    { word: "maria", category: "Nombre" },
    { word: "irene", category: "Nombre" },
    { word: "nuria", category: "Nombre" },
    { word: "lucia", category: "Nombre" },
    { word: "marta", category: "Nombre" },
    { word: "lidia", category: "Nombre" },
    { word: "tania", category: "Nombre" },
    { word: "irina", category: "Nombre" },
    { word: "rocio", category: "Nombre" },
    { word: "elisa", category: "Nombre" },
    { word: "sofia", category: "Nombre" },
    { word: "julia", category: "Nombre" },
    { word: "elias", category: "Nombre" },
    { word: "isaac", category: "Nombre" },
    { word: "oscar", category: "Nombre" },
    { word: "conor", category: "Nombre" },
    { word: "marco", category: "Nombre" },
    { word: "david", category: "Nombre" },
    { word: "mario", category: "Nombre" },
    { word: "anita", category: "Nombre" },
    { word: "carla", category: "Nombre" },
    { word: "frank", category: "Nombre" },
    { word: "jorge", category: "Nombre" },
    { word: "lucas", category: "Nombre" },
    { word: "vladi", category: "Nombre" },
    { word: "pablo", category: "Nombre" },
    { word: "susan", category: "Nombre" },
    { word: "ramon", category: "Nombre" },
    { word: "dario", category: "Nombre" },
    { word: "ruben", category: "Nombre" },

    { word: "actor", category: "Trabajo" },
    { word: "jueza", category: "Trabajo" },

    // Agrega el resto de las palabras aquí de manera similar
];


var EnglishwordList = [
    { word: "tiger", category: "Animal" },
    { word: "bison", category: "Animal" },
    { word: "cobra", category: "Animal" },
    { word: "dingo", category: "Animal" },
    { word: "eagle", category: "Animal" },
    { word: "gecko", category: "Animal" },
    { word: "goose", category: "Animal" },
    { word: "heron", category: "Animal" },
    { word: "horse", category: "Animal" },
    { word: "hyena", category: "Animal" },
    { word: "koala", category: "Animal" },
    { word: "lemur", category: "Animal" },
    { word: "llama", category: "Animal" },
    { word: "mouse", category: "Animal" },
    { word: "moose", category: "Animal" },
    { word: "robin", category: "Animal" },
    { word: "sheep", category: "Animal" },
    { word: "shark", category: "Animal" },
    { word: "sloth", category: "Animal" },
    { word: "snail", category: "Animal" },
    { word: "snake", category: "Animal" },
    { word: "squid", category: "Animal" },
    { word: "whale", category: "Animal" },
    { word: "zebra", category: "Animal" },
    { word: "rhino", category: "Animal" },
    { word: "camel", category: "Animal" },
    { word: "panda", category: "Animal" },

    { word: "Jacob", category: "Name" },
    { word: "Ivaan", category: "Name" },
    { word: "Felix", category: "Name" },
    { word: "Aaron", category: "Name" },
    { word: "Lucas", category: "Name" },
    { word: "James", category: "Name" },

    // Agrega el resto de las palabras aquí de manera similar
];


var wordListToUse = wordList; // Inicialmente, usamos la lista de palabras en español.

    var wordObj = wordListToUse[Math.floor(Math.random() * wordListToUse.length)];
    var word = wordObj.word.toUpperCase(); // Seleccionar la palabra
    var category = wordObj.category; // Obtener la categoría asociada

    console.log(word);

    window.onload = function () {
        initialize();
        showHelp();
        document.getElementById("country-toggle").addEventListener("click", toggleCountry);
    };

    function toggleCountry() {
        var countryLabel = document.getElementById("country-toggle").getAttribute("aria-label");

        // Cambiar la lista de palabras dependiendo del valor de aria-label
        if (countryLabel === "EEUU") {
            wordListToUse = EnglishwordList;
        } else if (countryLabel === "SPAIN") {
            wordListToUse = wordList;
        }

        // Actualizar la palabra seleccionada y categoría
        wordObj = wordListToUse[Math.floor(Math.random() * wordListToUse.length)];
        word = wordObj.word.toUpperCase();
        category = wordObj.category;

        console.log(word); // Imprimir la nueva palabra

        // Actualizar la ayuda (puedes agregar más lógica según sea necesario)
        showHelp();
    }

    function showHelp() {
        // Insertar la ayuda en el elemento con id="answer"
        document.getElementById("answer").innerText = category;
    }

function initialize() {
    // Crear el tablero de juego
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    // Crear el teclado
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ];

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key;
            }

            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.getElementById("keyboard-container").appendChild(keyboardRow);
    }

    // Escuchar la pulsación de teclas
    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
}

function processKey() {
    e = { "code" : this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return;

    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -= 1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "";
    }

    else if (e.code == "Enter") {
        update();
    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
    }
}

// Función para mostrar el modal
function showMessage(message) {
    let modal = document.createElement("div");
    modal.id = "gameModal";
    modal.classList.add("modal"); // Usamos la clase "modal" para el segundo modal
    modal.innerHTML = 
        `<div class="modal-content">
            <p>${message}</p>
        </div>`;
    document.body.appendChild(modal);

    // Después de 2 segundos, elimina el modal
    setTimeout(function() {
        if (modal) {
            modal.remove();
        }
    }, 2000); // Eliminar después de 2000ms
}


document.getElementById("info-toggle").addEventListener("click", () => {
    showInfo("Este es un mensaje de información.");
});

// Función para reiniciar el juego
function resetGame() {
    // Limpiar el tablero
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.getElementById(r.toString() + '-' + c.toString());
            tile.innerText = "";
            tile.classList.remove("correct", "present", "absent");
        }
    }

    // Escoger una nueva palabra aleatoria
    var countryLabel = document.getElementById("country-toggle").getAttribute("aria-label");

    // Cambiar la lista de palabras dependiendo del valor de aria-label
    if (countryLabel === "EEUU") {
        wordListToUse = EnglishwordList;
    } else if (countryLabel === "SPAIN") {
        wordListToUse = wordList;
    }

    // Actualizar la palabra seleccionada y categoría
    wordObj = wordListToUse[Math.floor(Math.random() * wordListToUse.length)];
    word = wordObj.word.toUpperCase();
    category = wordObj.category;

    console.log(word); // Imprimir la nueva palabra

       

    // Resetear las variables
    row = 0;
    col = 0;
    gameOver = false;

    // Mostrar la categoría nuevamente
    document.getElementById("answer").innerText = category;

    console.log(word);
}

function update() {
    let guess = "";
    document.getElementById("answer").innerText = "";

    // Formar la palabra a partir de las letras ingresadas
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase(); // Hacer que la comparación no distinga entre mayúsculas y minúsculas
    console.log(guess);

    // Comenzar a procesar la adivinanza
    let correct = 0;

    let letterCount = {};
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letterCount[letter]) {
            letterCount[letter] += 1;
        } else {
            letterCount[letter] = 1;
        }
    }

    console.log(letterCount);
    const right = document.getElementById('right-answer');
    const wrong = document.getElementById('wrong-answer');
    // Primera iteración: revisar las letras correctas
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        if (word[c] == letter) {
            currTile.classList.add("correct");

            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            correct += 1;
            letterCount[letter] -= 1;
        }

        if (correct == width) {
            // Si se adivina la palabra correctamente
            right.play();
            streak++;
            
            var countryLabel = document.getElementById("country-toggle").getAttribute("aria-label");

            console.log("countryLabel:", countryLabel);  // Verifica el valor de aria-label

            // Cambiar la lista de palabras dependiendo del valor de aria-label
            if (countryLabel === "SPAIN") {
                showMessage("¡Muy Bien! 🎉");
                document.querySelector(".high-score").innerText = `Racha: ${streak}`;
            } else if (countryLabel === "EEUU") {
                showMessage("¡Verry Good! 🎉");
                document.querySelector(".high-score").innerText = `Reach: ${streak}`;
            }
           
            setTimeout(resetGame, 2000); // Reiniciar después de 2 segundos
            
            
        } else if (row == height - 1 && correct !== width) {  
            // Si llegamos a la última fila sin adivinar la palabra
            wrong.play();
            var countryLabel = document.getElementById("country-toggle").getAttribute("aria-label");

            if (countryLabel === "SPAIN") {
                showMessage(`Perdiste 😢 La palabra era: <strong>${word}</strong>`);
                document.querySelector(".high-score").innerText = `Racha: 0`;
            } else if (countryLabel === "EEUU") {
                showMessage(`You've lost 😢 The word was: <strong>${word}</strong>`);
                document.querySelector(".high-score").innerText = `Reach: 0`;
            }
            streak = 0;
            
            setTimeout(resetGame, 2000); // Reiniciar después de 2 segundos
        }
    
    }

        // Agregar estilos CSS para el modal
    let style = document.createElement("style");
    style.innerHTML = `
        .modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            font-size: 20px;
            z-index: 1000;
        }
    `;
    document.head.appendChild(style);
        

    console.log(letterCount);

    // Segunda iteración: marcar las letras que están en la palabra pero en la posición equivocada
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        if (!currTile.classList.contains("correct")) {
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");

                let keyTile = document.getElementById("Key" + letter);
                if (!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }
                letterCount[letter] -= 1;
            } else {
                currTile.classList.add("absent");
                let keyTile = document.getElementById("Key" + letter);
                keyTile.classList.add("absent");
            }
        }
    }

    row += 1;
    col = 0;

    document.getElementById("answer").innerText = category; // Mostrar la categoría

    
    
}


