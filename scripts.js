

// Step 1: Computer choice function
            
function getComputerChoice() {
  const random = Math.random();
  if (random < 0.33) return "rock";
  if (random < 0.66) return "paper";
  return "scissors";
}

// Step 2: Human choice function
function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:").toLowerCase();
}

// Step 3: Main game function
function playGame() {
  // Step 4: Score variables (moved inside playGame)
  let humanScore = 0;
  let computerScore = 0;

  // Step 5: Single round function
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return;
    }
    
    const winConditions = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };
    
    if (winConditions[humanChoice] === computerChoice) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    console.log(`\nRound ${i + 1}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
  }

  // Final result
  console.log("\n=== GAME OVER ===");
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game
playGame();
        