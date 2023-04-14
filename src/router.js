const Router = require('express');
const path = require('path');
const router = Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// router.get("/thermostat", (req, res) => {
//   res.send(`The thermostat's temperature is: ${thermostat.getTemperature()}.`);
// });

// router.post("/thermostat/up", (req, res) => {
//   thermostat.up(1);
//   res.send(`The thermostat's temperature has been increased by 1`);
// });

// router.post("/thermostat/down", (req, res) => {
//   thermostat.down(1);
//   res.send(`The thermostat's temperature has been decreased by 1`);
// });

// router.delete("/thermostat/reset", (req, res) => {
//   thermostat.resetTemperature();
//   res.send(`The thermostat's temperature has been reset`);
// });

// router.get("*", (req, res) =>
//   res.status(404).send("There is no content at this route")
// );

// const powerHeader = document.querySelector(".power-header");

module.exports = router;