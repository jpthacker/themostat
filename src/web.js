const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./components/thermostat');

const thermostat = new Thermostat();

app.get('/', (req, res) => {
  res.send({message: 20})
});

app.get('/thermostat', (req, res) => {
  res.send(`The thermostat's temperature is: ${thermostat.getTemperature()}.`)
});

app.post('/thermostat/up', (req, res) => {
  thermostat.up(1);
  res.send(`The thermostat's temperature has been increased by 1`);
});

app.post('/thermostat/down', (req, res) => {
  thermostat.down(1);
  res.send(`The thermostat's temperature has been decreased by 1`);
});

app.delete('/thermostat/reset', (req, res) => {
  thermostat.resetTemperature();
  res.send(`The thermostat's temperature has been reset`);
})


console.log(`Server listening on localhost:${port}`);
app.listen(port);