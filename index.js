let score = 0
let range = 2
console.log("Welcome to Williams guessing game")
console.log("Please enter your name")
input = prompt()
console.log("lets begin", input)
function random(range) {
  let randomNumber = Math.floor(Math.random() * range) + 1
  console.log(randomNumber)
  return randomNumber
}
let randomNum = 0
do {
  randomNum = random(range)
  console.log("Guess a number between 1 and ", range)

  userNumber = parseInt(prompt())
  if (userNumber === randomNum) {
    console.log("Correct guess")
    range += 1
    score += 1
    console.log("Your Score is ", score)
  } else {
    console.log("Wrong Guess!")
    console.log("Your Score is ", score)
    console.log("Thanks for playing")
  }
} while (userNumber === randomNum)
