const Kelvin = 0;//starting kelvin

const celsius = Kelvin - 273;//startiing celsius

let fahrenheit = celsius * (9/5) + 32;//math diff kel-cel

fahrenheit = Math.floor(fahrenheit);//caculate

console.log(`The tempature is ${fahrenheit} degrees fahrenheit.`);
