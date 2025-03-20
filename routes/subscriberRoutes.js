const express = require("express");
const Subscriber = require("../models/Subscriber");
const routes = express.Router();

// Create a new subscriber
routes.post("/subscribers", async (req, res) => {
  try {
    const newUser = new Subscriber(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all subscribers
routes.get("/subscribers", async (req, res) => {
  try {
    const users = await Subscriber.find();
    return res.status(200).json({ subscribers: users });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Get subscriber by name (Using Query Parameters)
routes.get("/subscribers/name/:name", async (req, res) => {
  try {
    const user = await Subscriber.findOne({ name: req.params.name });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ subscriber: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get subscriber by ID
routes.get("/subscribers/:id", async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (!subscriber) {
      return res.status(400).json({ message: "Subscriber not found" });
    }
    res.status(200).json(subscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});




module.exports = routes;
