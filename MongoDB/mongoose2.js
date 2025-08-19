const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/student")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Mongo Error", err));

// Schema
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String },
  email: { type: String, unique: true, required: true },
  job_title: { type: String },
  gender: { type: String },
});

// Model
const User = mongoose.model("info", userSchema);

// Middleware
app.use(express.json()); // so we can send JSON data in POST, PATCH

// ================= CRUD APIs =================

// 1. Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    return res.end(users)
    // return res.json(users);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// 2. Get a single user by ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// 3. Create new user (POST)
app.post("/api/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// 4. Update user (PATCH)
app.patch("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// 5. Delete user
app.delete("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json({ message: "User deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
