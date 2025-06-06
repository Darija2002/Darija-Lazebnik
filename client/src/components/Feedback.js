// src/components/Feedback.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Feedback() {
  const [form, setForm] = useState({ name: '', comment: '' });
  const [feedbacks, setFeedbacks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/feedbacks');
      setFeedbacks(res.data);
    } catch (err) {
      console.error('Klaida gaunant atsiliepimus:', err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/feedbacks/${editingId}`, form);
      } else {
        await axios.post('http://localhost:5000/api/feedbacks', form);
      }
      setForm({ name: '', comment: '' });
      setEditingId(null);
      fetchFeedbacks();
    } catch (err) {
      alert('Klaida pateikiant atsiliepimą.');
    }
  };

  const handleEdit = (fb) => {
    setForm({ name: fb.name, comment: fb.comment });
    setEditingId(fb.id);
  };

  return (
    <div className="feedback">
      <h2>Atsiliepimai</h2>
      <form onSubmit={handleSubmit}>
        <label>Jūsų vardas:</label>
        <input name="name" value={form.name} onChange={handleChange} required />
        <label>Atsiliepimas:</label>
        <textarea name="comment" value={form.comment} onChange={handleChange} required />
        <button type="submit">
          {editingId ? 'Atnaujinti atsiliepimą' : 'Pateikti atsiliepimą'}
        </button>
      </form>

      <ul>
        {feedbacks.map(fb => (
          <li key={fb.id}>
            <strong>{fb.name}:</strong> {fb.comment}{' '}
            <button onClick={() => handleEdit(fb)}>Redaguoti</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feedback;
