// Import necessary modules using ES modules
import express from 'express';
import mysql from 'mysql';
import cors from 'cors'; // To handle CORS issues

const app = express();
const port = 3000; // Use the same port as your frontend for development

app.use(express.json()); // Built-in body parsing for JSON
app.use(cors()); // Enable CORS for cross-origin requests

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'account_db' // Replace with your MySQL database name
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    throw err;
  }
  console.log('MySQL connected...');
});

// User registration route
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body; // Get form data
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  
  db.query(query, [username, email, password], (err, result) => {
    if (err) {
      console.error('Database error during registration:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'User registered successfully!' });
  });
});

// User login route
app.post('/login', (req, res) => {
  const { email, password } = req.body; // Get form data
  const query = 'SELECT * FROM users WHERE email = ?';

  db.query(query, [email], (err, results) => {
    if (err) {
      console.error('Database error during login:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length === 0 || results[0].password !== password) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user: results[0] });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
