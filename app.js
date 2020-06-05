const square = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const mole = document.querySelector(".mole");
let score = document.querySelector("#score");

let result = 0;

let totalTime = timeLeft.textContent;


function randomSqure() {

    square.forEach( square => {
        square.classList.remove("mole");
    })

    let randomSq = square[Math.floor(Math.random() * 9)];

    randomSq.classList.add("mole");

    hitPosition = randomSq.id;
}


square.forEach( sq => {
    sq.addEventListener('mouseup' , () => {
        if(hitPosition === sq.id)
        {
            result += 1;
            score.textContent = result;
        }

        
    })
})


function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSqure,1000);
    timeLeft.textContent = timerId;
}

moveMole();


function countDown() {
    totalTime--;
    timeLeft.textContent = totalTime;

    if(totalTime === 0)
    {
        clearInterval(timerId);
        alert("GAME OVER :) YOUR FINAL SCORE IS="+result);
    }
}

let timerId = setInterval(countDown,1000);




