let numbers = [17, 31, 77, 20, 63];
let userInput = document.getElementById('userInput');
let indexOfNumber = document.getElementById('indexOfNumber');
let findBtn = document.getElementById('findBtn');
findBtn.onclick = function() {
    let userInputValue = userInput.value;
    let indexValue = numbers.findIndex(element => element == userInputValue);
    indexOfNumber.textContent = indexValue;
    userInput.textContent = "";

}
