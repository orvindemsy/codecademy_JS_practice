//This is a temperature degree in Kelvin
const kelvin = 270;	
//Degree in celcius
const celcius = kelvin - 273;
//Degree in fahrenheit
let fahrenheit = celcius * (9/5) + 32;

//Round down fahrenheit value
fahrenheit = Math.floor(fahrenheit); //Rounding up fahrenheit value
console.log(`The temperature is ${fahrenheit} degress Fahrenheit`);

//Converting celcius to newton
var newton = celcius * (33/100);
newton = Math.floor(newton);
console.log(`The Newton scale is ${newton}`);