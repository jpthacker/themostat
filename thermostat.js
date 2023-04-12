class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up(amount) {
    this.temperature += amount;
    if (this.powerSavingMode && this.temperature > 25) {
      this.temperature = 25;
    } else if (this.temperature > 32) {
      this.temperature = 32;
    }
  }

  down(amount) {
    this.temperature -= amount;
  }

  turnOffPowerSaving() {
    this.powerSavingMode = false;
  }
}

module.exports = Thermostat;