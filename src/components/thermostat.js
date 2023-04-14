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
    if (this.temperature < 10) {
      this.temperature = 10;
    }
  }

  setPowerSavingMode(boolean) {
    this.powerSavingMode = boolean;
  }

  resetTemperature() {
    this.temperature = 20;
  }

  getCurrentEnergyUsage() {
    if (this.temperature <= 18) {
      return "The current temperature is 10: low usage";
    } else if (this.temperature <= 25) {
      return "The current temperature is 20: medium usage";
    } else {
      return "The current temperature is 32: high usage";
    }
  }
}

module.exports = Thermostat;
