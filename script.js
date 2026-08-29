// Convertidor de Celsius a Fahrenheit

function celsiusAFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Prueba con algunos valores
let temp1 = 25;
let temp2 = 0;
let temp3 = 100;

console.log(temp1 + "°C = " + celsiusAFahrenheit(temp1) + "°F");
console.log(temp2 + "°C = " + celsiusAFahrenheit(temp2) + "°F");
console.log(temp3 + "°C = " + celsiusAFahrenheit(temp3) + "°F");

// Un array (lista) de temperaturas
let temperaturas = [10, 15, 20, 30, 35];

// Recorrer el array y convertir cada una
for (let i = 0; i < temperaturas.length; i++) {
    let grados = temperaturas[i];
    console.log(grados + "°C equivale a " + celsiusAFahrenheit(grados) + "°F");
}
function fahrenheitACelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

console.log("77°F equivale a " + fahrenheitACelsius(77) + "°C");
console.log("32°F equivale a " + fahrenheitACelsius(32) + "°C");