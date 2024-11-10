 
  const express = require('express');
  const { Pool } = require('pg');
  const cors = require('cors');
  require('dotenv').config();
  
  const app = express();
  const PORT = process.env.PORT || 5000;
  
  // Middleware
  app.use(cors());
  app.use(express.json()); // Parse JSON requests
  
  // PostgreSQL Connection
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
  
  // Routes
  app.use('/api/auth', require('./routes/auth')(pool));
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  