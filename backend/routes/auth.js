// backend/routes/auth.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Assuming you have a User model defined
const router = express.Router();
 

// Function to generate a JWT
const generateToken = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: '1h', // Token expiration time
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, options);
  return token;
};

module.exports = { generateToken };


if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}


// User SignUp Route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// User SignIn Route
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: "Both fields are required" });
    }
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        console.log("User not found");
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("Password does not match");
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      // Check if JWT_SECRET is set
      if (!process.env.JWT_SECRET) {
        console.error("JWT_SECRET not defined in environment variables");
        return res.status(500).json({ message: "Server configuration error" });
      }
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.status(200).json({ message: "Login successful", token });
    } catch (err) {
      console.error("Error in signin route:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  });
  

module.exports = router;
