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
    if (this.temperature < 10) {
      this.temperature = 10;
    }
  }
}

module.exports = Thermostat;
