const Thermostat = require("./components/thermostat");
const thermostat = new Thermostat()

const tempHeader = document.querySelector(".temp-header");
tempHeader.innerText = `The temperature is: ${thermostat.getTemperature()}`;