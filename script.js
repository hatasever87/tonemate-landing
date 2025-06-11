
function generateResponse() {
  const input = document.getElementById("userInput").value.trim();
  const output = document.getElementById("demoOutput");

  if (!input) {
    output.innerText = "Typ eerst een bericht.";
    output.classList.add("visible");
    return;
  }

  output.innerText = "AI is aan het nadenken...";
  output.classList.add("visible");

  setTimeout(() => {
    let suggestion = input
      .replace("yo", "hey")
      .replace("hoe gaat", "hoe gaat het")
      .replace("?", "!")
      .replace(".", "!");
    output.innerText = "ToneMate suggestie: " + suggestion;
  }, 600);
}
