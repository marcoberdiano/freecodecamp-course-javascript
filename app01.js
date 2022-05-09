// Only change code below this line
class Thermostat  {
    constructor(fahrenheit){
      this._temperature = fahrenheit;
    }
   
     get temperature() {
       return 5/9 * (this._temperature - 32);
     }
   
     set temperature(celsius) {
       this._temperature = celsius;
     }
   
   }

   // Only change code above this line
   
   const thermos = new Thermostat(76); // Setting in Fahrenheit scale
   let temp = thermos.temperature; // 24.44 in Celsius
   console.log(temp)
   thermos.temperature = 26;
   console.log(temp)
   temp = thermos.temperature; // 26 in Celsius
   
   console.log(temp)