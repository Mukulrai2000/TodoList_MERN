import express from "express";

import Connection from "./database/Db.js";

const app = express();

const PORT = 8000;

Connection();

app.listen(PORT, () =>
  console.log(`Your server is running successfully on PORT ${PORT}`)
);
