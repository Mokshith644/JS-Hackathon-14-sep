function convertTemperature() {
    const tempInput = document.getElementById('temperature').value;
    const conversionType = document.getElementById('conversionType').value;
    const resultDiv = document.getElementById('result');

    const temperature = parseFloat(tempInput);

    let result;

    if (conversionType === 'cToF') {
        result = (temperature * 9/5) + 32;
        resultDiv.textContent = `${temperature}°C is ${result}°F`;
    } else if (conversionType === 'fToC') {
        result = (temperature - 32) * 5/9;
        resultDiv.textContent = `${temperature}°F is ${result}°C`;
    }
}