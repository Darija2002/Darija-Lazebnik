const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// SQLite prijungimas
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) return console.error(err.message);
  console.log('✅ Prijungta prie SQLite duomenų bazės.');
});

// --- 1. Users lentelė ---
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  email TEXT NOT NULL
)`);

// --- 2. Contacts lentelė (kontaktų forma) ---
db.run(`CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL
)`);

// --- 3. Volunteers lentelė ---
db.run(`CREATE TABLE IF NOT EXISTS volunteers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  email TEXT NOT NULL
)`);

// --- API: USERS ---
app.get('/api/users', (req, res) => {
  db.all(`SELECT * FROM users`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/users', (req, res) => {
  const { firstName, lastName, email } = req.body;
  db.run(`INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)`,
    [firstName, lastName, email],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, firstName, lastName, email });
    }
  );
});

app.put('/api/users/:id', (req, res) => {
  const { firstName, lastName, email } = req.body;
  const { id } = req.params;
  db.run(`UPDATE users SET firstName = ?, lastName = ?, email = ? WHERE id = ?`,
    [firstName, lastName, email, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Atnaujinta sėkmingai' });
    }
  );
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM users WHERE id = ?`, [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Ištrinta sėkmingai' });
  });
});

// --- API: CONTACTS ---
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  db.run(`INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`,
    [name, email, message],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, name, email, message });
    }
  );
});

// --- API: VOLUNTEERS ---
app.get('/api/volunteers', (req, res) => {
  db.all(`SELECT * FROM volunteers`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/volunteers', (req, res) => {
  const { firstName, lastName, email } = req.body;
  db.run(`INSERT INTO volunteers (firstName, lastName, email) VALUES (?, ?, ?)`,
    [firstName, lastName, email],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, firstName, lastName, email });
    }
  );
});

app.delete('/api/volunteers/:id', (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM volunteers WHERE id = ?`, [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Savanoris ištrintas' });
  });
});
// --- 4. Reviews lentelė ---
db.run(`CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  comment TEXT NOT NULL
)`);

// --- API: REVIEWS ---
app.get('/api/reviews', (req, res) => {
  db.all(`SELECT * FROM reviews`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/reviews', (req, res) => {
  const { name, comment } = req.body;
  db.run(`INSERT INTO reviews (name, comment) VALUES (?, ?)`, [name, comment], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID, name, comment });
  });
});

app.put('/api/reviews/:id', (req, res) => {
  const { name, comment } = req.body;
  const { id } = req.params;
  db.run(`UPDATE reviews SET name = ?, comment = ? WHERE id = ?`, [name, comment, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Atsiliepimas atnaujintas' });
  });
});

app.delete('/api/reviews/:id', (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM reviews WHERE id = ?`, [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Atsiliepimas ištrintas' });
  });
});
// --- 4. Reviews lentelė ---
db.run(`CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  comment TEXT NOT NULL
)`);

// Sukurti naują atsiliepimą
app.post('/api/reviews', (req, res) => {
  const { name, comment } = req.body;
  db.run(
    `INSERT INTO reviews (name, comment) VALUES (?, ?)`,
    [name, comment],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, name, comment });
    }
  );
});

// Gauti visus atsiliepimus
app.get('/api/reviews', (req, res) => {
  db.all(`SELECT * FROM reviews`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Atnaujinti atsiliepimą
app.put('/api/reviews/:id', (req, res) => {
  const { name, comment } = req.body;
  const { id } = req.params;
  db.run(
    `UPDATE reviews SET name = ?, comment = ? WHERE id = ?`,
    [name, comment, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Atsiliepimas atnaujintas' });
    }
  );
});

// Ištrinti atsiliepimą
app.delete('/api/reviews/:id', (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM reviews WHERE id = ?`, [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Atsiliepimas ištrintas' });
  });
});

// --- Statinių failų aptarnavimas (TURI BŪTI PABAIGOJE) ---
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// --- Paleidžiam serverį ---
app.listen(PORT, () => console.log(`✅ Serveris veikia: http://localhost:${PORT}`));
