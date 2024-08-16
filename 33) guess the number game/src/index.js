let randNum = Math.floor(Math.random() * 100 + 1);
let count = 0;
let userNum;
let playAgain;
do {
	do {
		userNum = Number.parseInt(
			prompt("Guess the number between 1 to 100...")
		);
		if (userNum === randNum) {
			alert(
				`Congratulations! You guessed it correct.\nYour score is: ${
					100 - count
				}`
			);
		} else if (userNum < randNum) {
			alert("number is bigger.");
		} else if (userNum > randNum) {
			alert("number is smaller.");
		} else {
			alert("Enter valid number.");
		}
		count++;
	} while (randNum != userNum);
	randNum = Math.floor(Math.random() * 100 + 1);
	count = 0;
	playAgain = confirm("Do you want to play again?");
} while (playAgain);
