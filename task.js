// Fahrenheit to Celsius convert
function fahrenheitToCelsius(digri) {
    const result = (digri - 32) * 0.5556;
    const submit = result + " C";
    return submit;

}
const inputfer = 94;
const storcel = fahrenheitToCelsius(inputfer);
console.log(storcel);