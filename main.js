//Magic 8 Ball
console.log("");
//Button event listener
document.getElementById("ballBtn").addEventListener("click", btnClicked);

//Function
function btnClicked() {
  ///Input
  let question = document.getElementById("question-in").value.toLowerCase();
  let output = document.getElementById("output");

  if (question === "does the magic 8 ball actually work?") {
    output.innerHTML = "HOW DARE YOU DOUBT ME?";
  } else if (question === "is java script awesome?") {
    output.innerHTML = "I was made from it so YES!";
  } else if (question === "") {
    output.innerHTML = "Please ask a question";
  } else {
    // Random Response
    let randNum = Math.random();
    if (randNum < 0.2) {
      output.innerHTML = "Outlook not so good.";
    } else if (randNum < 0.4) {
      output.innerHTML = "Don't count on it.";
    } else if (randNum < 0.6) {
      output.innerHTML = "Concentrate and ask again";
    } else if (randNum < 0.8) {
      output.innerHTML = "As I see it, yes";
    } else {
      output.innerHTML = "Without a doubt";
    }
  }
}
