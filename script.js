function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 3){
      return "rock"
  }else if (randomNumber == 1){
      return "paper"
  }else if (randomNumber == 2){
      return "scissors"
  }
}

