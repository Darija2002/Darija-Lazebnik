import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      alert('Žinutė išsiųsta!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Įvyko klaida siunčiant žinutę.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h2 style={{ textAlign: 'center' }}>Susisiekite su mumis</h2>
      <label>Vardas:</label>
      <input name="name" value={form.name} onChange={handleChange} required />
      
      <label>El. paštas:</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} required />

      <label>Žinutė:</label>
      <textarea name="message" value={form.message} onChange={handleChange} rows="5" required />

      <button type="submit">Siųsti</button>
    </form>
  );
}

export default ContactForm;
