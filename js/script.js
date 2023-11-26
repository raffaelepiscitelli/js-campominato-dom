function generateSquare (){
    const square = document.createElement("article");
    square.classList.add("square-class");
    return square;
}

const mainContent = document.querySelector(".table");

const play = document.querySelector("button");

const bombsArray = [];

function randomNumbers(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1));
}

let minNumber = 1;

let maxNumber = 100;

let score = 0;

isGameOver = false;

play.addEventListener("click", function(){
    mainContent.innerHTML = "";
    for (let i = 1 ; i <= 100 ; i++){
        const squareElement = generateSquare();
        const squareContent = i;
        mainContent.appendChild(squareElement);
        squareElement.innerHTML = `<span> ${squareContent}</span>`;
        let numbersContent = randomNumbers(minNumber, maxNumber);
        if (bombsArray.length < 16){
            let randomBombs = randomNumbers(minNumber, maxNumber);
            while (bombsArray.includes(randomBombs)){
                randomBombs = randomNumbers(minNumber, maxNumber);
            }
            bombsArray.push(randomBombs);
        }

        squareElement.addEventListener("click", function(){
            if (!isGameOver){
                if (bombsArray.includes(squareContent)){
                    squareElement.classList.add("bg-red");
                    console.log("FATALITY");
                    isGameOver = true
                }   else {
                    squareElement.classList.add("bg-blue")
                    console.log(++score);
                    updateScore(score);
                }
            }
        })
    }
})

function updateScore (scoreToUpdate){
    const fianlScoreEl = document.getElementById("final-score");
    fianlScoreEl.innerText= scoreToUpdate;
}




