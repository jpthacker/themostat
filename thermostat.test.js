const Thermostat = require('./thermostat');

describe("Thermostat class", () => {
  const thermostat = new Thermostat();
  it("starts with an initial temperature of 20 degrees", () => {
    expect(thermostat.getTemperature()).toBe(20);
  })
})