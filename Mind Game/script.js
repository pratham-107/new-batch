function calculate() {
    const chosenNumber = parseInt(document.getElementById('chosenNumber').value);
    const evenNumber = parseInt(document.getElementById('evenNumber').value);

    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 10) {
        alert('Please enter a valid number between 1 and 10.');
        return;
    }

    const step1 = chosenNumber * 2;

    const step2 = step1 + evenNumber;

    const step3 = step2 / 2;

    const result = step3 - chosenNumber;

    document.getElementById('result').textContent = `The result is: ${result}`;
}