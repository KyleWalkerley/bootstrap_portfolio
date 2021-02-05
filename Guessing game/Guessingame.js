var secret = Math.floor(Math.random() * 10) + 1;

var Button = document.getElementById("button");
Button.addEventListener("click", startGame);

function startGame() {
    var guess = parseInt(prompt("Please guess a number between 1 and 10."));
    checkAnswer(guess);
}

function checkAnswer(guess) {
    var active = true;
    while (active) {
        if (guess > secret) {
            alert("You guessed wrong too high!")
            startGame();
        } else if (guess < secret) {
            alert("You guessed wrong too low!")
            startGame();
        } else if (guess === secret) {
            alert("You are correct! Your guess " + guess + " is correct")
            active = false
            document.getElementById("myTxt").innerHTML = "You are Correct.";
        } else {
            alert("Invalid input");
            startGame();

        }


    }
}