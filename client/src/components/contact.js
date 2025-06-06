import React, { useState } from 'react';
import axios from 'axios';
import '../css/styles.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Siunčiame į Express serverį
      await axios.post('http://localhost:5000/api/contact', formData);
      alert(`Ačiū, ${formData.name}! Jūsų žinutė išsiųsta.`);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Klaida siunčiant duomenis:', error);
      alert('Įvyko klaida siunčiant žinutę.');
    }
  };

  return (
    <div>
      <header>
        <h1>Kontaktai</h1>
        <nav>
          <ul className="nav">
            <li><a href="/">Pagrindinis</a></li>
            <li><a href="/about">Apie</a></li>
            <li><a href="/contact">Kontaktai</a></li>
            <li><a href="/projects">Projektai</a></li>
            <li><a href="/team">Komanda</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Susisiekite su mumis</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Vardas:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">El. paštas:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Žinutė:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Siųsti</button>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2025 Savanorystė Lietuvoje</p>
      </footer>
    </div>
  );
}

export default Contact;
