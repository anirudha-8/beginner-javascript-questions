alert(
	`==============================\n
    Welcome to the Snake, Water, Gun game\n
==============================`
);

const choices = ["s", "w", "g"];
let computerChoice = choices[Math.floor(Math.random() * 3)];

let playAgain;

let userChoice;

function choicesMade(user, comp) {
	return `You chooses: ${user}\nComputer chooses: ${comp}`;
}

do {
	userChoice = prompt(
		`Please type your choice...
        s - Snake
        w - Water
        g - Gun`
	);

	if (userChoice == "s" || userChoice == "w" || userChoice == "g") {
		if (userChoice == computerChoice) {
			alert(`${choicesMade(userChoice, computerChoice)}\nIt's Tie`);
		} else if (computerChoice == "s") {
			if (userChoice == "g") {
				alert(
					`${choicesMade(
						userChoice,
						computerChoice
					)}\nCongratulations! You Won.`
				);
			} else if (userChoice == "w") {
				alert(
					`${choicesMade(
						userChoice,
						computerChoice
					)}\nYou Lose, Try Again!`
				);
			}
		} else if (computerChoice == "w") {
			if (userChoice == "s") {
				alert(
					`${choicesMade(
						userChoice,
						computerChoice
					)}\nCongratulations! You Won.`
				);
			} else if (userChoice == "g") {
				alert(
					`${choicesMade(
						userChoice,
						computerChoice
					)}\nYou Lose, Try Again!`
				);
			}
		} else if (computerChoice == "g") {
			if (userChoice == "w") {
				alert(
					`${choicesMade(
						userChoice,
						computerChoice
					)}\nCongratulations! You Won.`
				);
			} else if (userChoice == "s") {
				alert(
					`${choicesMade(
						userChoice,
						computerChoice
					)}\nYou Lose, Try Again!`
				);
			}
		}
	} else {
		alert(`Please, Enter valid choice!`);
	}

	computerChoice = choices[Math.floor(Math.random() * 3)];

	playAgain = confirm("Do you want to play again?");
} while (playAgain);
