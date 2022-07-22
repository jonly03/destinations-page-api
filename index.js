// using require to import => we are importing CommonJS module
// const express = require("express");

// using import keyword to import => we are importing ES module
import express from "express";
import cors from "cors";

import destinationsRouter from "./Routes/destinations.js";

const server = express(); // This server is deaf

// Middleware Setup
server.use(cors());
server.use(express.json());

server.use("/destinations", destinationsRouter);

// const PORT = process.env.PORT || 3000;
let PORT;
if (process.env.PORT !== undefined) {
  PORT = process.env.PORT;
} else {
  PORT = 3000;
}

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
}); // Told the server to listen on port available port (when deployed) or 3000 when local
