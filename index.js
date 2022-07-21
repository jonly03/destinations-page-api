// using require to import => we are importing CommonJS module
// const express = require("express");

// using import keyword to import => we are importing ES module
import express from "express";
import cors from "cors";
import { filterDestinations } from "./helpers.js";

const server = express(); // This server is deaf

server.use(cors());

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

const destinationsDB = {
  123456: {
    destination: "Eiffel Tower",
    location: "Paris",
    photo:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  234567: {
    destination: "Champs Elysée",
    location: "Paris",
    photo:
      "https://i.guim.co.uk/img/media/9891b6b94fb8b8e06971bb4d307224e6a97f2a7b/333_0_5667_3401/master/5667.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=90c306279bc4f0a6aedb9f0b78763f2d",
  },
  345678: {
    destination: "Big Ben",
    location: "London",
    photo:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  },
};

// https://tenor.googleapis.com/v2/search?key=AIzaSyCmqqhse3UwYRzXIlAZPxFfCBI1NJd12vc&q=lebron
// https://api-destinations-page.herokuapp.com/destinations
// https://api-destinations-page.herokuapp.com/destinations?country=france

// CREATE

// READ => DO THIS
// GET /destinations => send back the whole db
// GET /destinations?city=kajdkjakdjkajd => send filtered locations by city
// localhost:3000/destinations => the whole db of destinations
// localhost:3000/destinations?city=london => only send back destinations whose location is London
server.get("/destinations", (req, res) => {
  //TODO Check for a city query parameter
  const city = req.query.city;

  filterDestinations({ city, destinationsDB, res });
});

// GET /destinations/city/:myCity
// localhost:3000/destinations/city/San Bernadino
server.get("/destinations/city/:myCity", (req, res) => {
  // log the city passed in the url as a named route parameter
  const city = req.params.myCity;

  filterDestinations({ city, destinationsDB, res });
});

// UPDATE

// DELETE
