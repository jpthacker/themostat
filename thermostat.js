class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  getTemperature() {
    return this.temperature;
  }

  up(amount) {
    this.temperature += amount;
  }

  down(amount) {
    this.temperature -= amount;
  }
}

module.exports = Thermostat;