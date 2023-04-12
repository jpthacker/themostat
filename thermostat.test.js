const Thermostat = require("./thermostat");

describe("Thermostat class", () => {
  const thermostat = new Thermostat();
  it("starts with an initial temperature of 20 degrees", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });
  it("increases the temperature with an up method", () => {
    thermostat.up(1);
    expect(thermostat.getTemperature()).toBe(21);
    thermostat.up(4);
    expect(thermostat.getTemperature()).toBe(25);
  });
  it("decreases the temperature with a down method", () => {
    thermostat.down(1);
    expect(thermostat.getTemperature()).toBe(24);
    thermostat.down(4);
    expect(thermostat.getTemperature()).toBe(20);
  });
    it("ensures the minimum temperature is 10 degrees", () => {
    thermostat.down(11);
    expect(thermostat.getTemperature()).toBe(10);
  });
  it("begins with Power saving mode on by default", () => {
    thermostat.up(26);
    expect(thermostat.getTemperature()).toBe(25);
  });
  it("turns power saving off", () => {
    thermostat.setPowerSavingMode(false);
    thermostat.up(33);
    expect(thermostat.getTemperature()).toBe(32);
  });
  it("turns power saving back on", () => {
    thermostat.setPowerSavingMode(true);
    thermostat.up(26);
    expect(thermostat.getTemperature()).toBe(25);
  });
});