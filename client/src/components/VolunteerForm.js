// src/components/VolunteerForm.js
import React, { useState } from 'react';
import axios from 'axios';

function VolunteerForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/volunteers', form);
      setSuccess(true);
      setForm({ firstName: '', lastName: '', email: '' });
    } catch (err) {
      alert('Įvyko klaida siunčiant formą.');
    }
  };

  return (
    <div className="volunteer-form">
      <h2>Noriu tapti savanoriu</h2>
      <form onSubmit={handleSubmit}>
        <label>Vardas:</label>
        <input name="firstName" value={form.firstName} onChange={handleChange} required />

        <label>Pavardė:</label>
        <input name="lastName" value={form.lastName} onChange={handleChange} required />

        <label>El. paštas:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <button type="submit">Siųsti paraišką</button>
      </form>

      {success && <p className="success-message">Ačiū! Mes su jumis susisieksime.</p>}
    </div>
  );
}

export default VolunteerForm;
