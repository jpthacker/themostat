const express = require("express");
const router = require('./src/router')
const app = express();
const port = 3000;

// Tell the app what to expect in terms if req.body
app.use(express.json())

app.use("/", router);

console.log(`Server listening on localhost:${port}`);
app.listen(port);
