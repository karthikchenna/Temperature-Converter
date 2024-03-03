function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputTemperature)) {
        alert('Please enter a valid number for the temperature.');
        return;
    }

    let convertedTemperature;

    if (inputUnit === 'Celsius') {
        convertedTemperature = inputTemperature * 9 / 5 + 32;
    } else {
        convertedTemperature = (inputTemperature - 32) * 5 / 9;
    }

    document.getElementById('outputTemperature').textContent = convertedTemperature.toFixed(2);
    document.getElementById('outputUnit').textContent = outputUnit;
}