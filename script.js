let evaluatedText = document.getElementById("evaluatedText")
let letterCount = document.getElementById("letterCount")

evaluatedText.addEventListener("input", cal_length)

function cal_length() {
    let text = evaluatedText.value;
    let word = text.length;
    letterCount.innerHTML = word;
}