let images = ["dice-01.svg",
    "dice-02.svg",
    "dice-03.svg",
    "dice-04.svg",
    "dice-05.svg",
    "dice-06.svg"];
let dice = document.querySelectorAll("img");
let selectedBetType;

function roll() {
    resetResult();
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });
        // Roll each die independently and display result on screen
        let dieOneValue = Math.floor(Math.random() * 6 );
        let dieTwoValue = Math.floor(Math.random() * 6 );
        console.log(dieOneValue, dieTwoValue)

        document.querySelector("#die-1").setAttribute("src", "images/" + images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", "images/" + images[dieTwoValue]);
        let total= ((dieOneValue + 1 ) + (dieTwoValue + 1 ));
        checkResult(total);
        }, 1000);
        
    }
    function selectBet(betType, button){
        resetResult();
        selectedBetType = betType;
        button.style.backgroundColor="#d06aff";
        
    }

    function checkResult(total) {
        var resultElement = document.getElementById("result");
        document.querySelector("#total").innerHTML = "Your roll is " + (total);

        if (total > 7 && selectedBetType === "up") {
            resultElement.textContent = "Hurray! You won!";
            showConfetti(true);
        } else if (total < 7 && selectedBetType === "down") {
            resultElement.textContent = "Hurray! You won!";
           showConfetti(true);
        } else if (total === 7 && selectedBetType === "equals") {
            resultElement.textContent = "Hurray! You won!";
            showConfetti(true);
        } else {
            resultElement.textContent = "You lose! Better luck next time.";
            showConfetti(false);
        }
    }
   function resetResult(){
    document.getElementById("result").textContent="";
    document.querySelector("#total").innerHTML = "";
    var buttons = document.getElementsByClassName("bets");
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = "#a82ee9"; // Set it back to the initial color
            }
   }

   function showConfetti(isWinner) {
    // Create confetti elements
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement('div');
        if(isWinner==false){
        confetti.innerHTML = '&#128078';
        confetti.style.animationName = 'confetti-fall-fail';
        confetti.style.backgroundColor='none';
    }
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
        document.body.appendChild(confetti);
    }

    
    setTimeout(() => {
        // Remove confetti elements after the animation duration
        document.querySelectorAll('.confetti').forEach(confetti => confetti.remove());
    }, 3000); // Adjust the duration as needed
}


function getRandomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

