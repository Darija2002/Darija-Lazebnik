import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/new_style.css';

function Projects() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/reviews');
      setReviews(res.data);
    } catch (err) {
      console.error('Klaida gaunant atsiliepimus:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    try {
      if (editId !== null) {
        await axios.put(`http://localhost:5000/api/reviews/${editId}`, { name, comment });
      } else {
        await axios.post('http://localhost:5000/api/reviews', { name, comment });
      }
      setName('');
      setComment('');
      setEditId(null);
      fetchReviews();
    } catch (err) {
      console.error('Klaida siunčiant atsiliepimą:', err);
    }
  };

  const handleEdit = (review) => {
    setEditId(review.id);
    setName(review.name);
    setComment(review.comment);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/reviews/${id}`);
      fetchReviews();
    } catch (err) {
      console.error('Klaida trinant atsiliepimą:', err);
    }
  };

  const showMoreInfo = (projectName) => {
    alert(`Daugiau informacijos apie: ${projectName}`);
  };

  return (
    <div>
      <header className="bg-primary text-white text-center py-4">
        <h1>Projektai</h1>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item"><a className="nav-link text-white" href="/">Pagrindinis</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/about">Apie</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/contact">Kontaktai</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/projects">Projektai</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/team">Komanda</a></li>
          </ul>
        </nav>
      </header>

      <main className="container my-5">
        <section>
          <h2 className="text-center mb-4">Mūsų projektai</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {[{ title: "Pagalba šeimoms", img: "/images/gallery1.jpg", text: "Padėjome daugiau nei 500 šeimų." },
              { title: "Vaikų švietimas", img: "/images/gallery2.jpg", text: "Organizuota daugiau nei 1000 švietimo programų." },
              { title: "Bendruomenių stiprinimas", img: "/images/gallery3.jpg", text: "Įgyvendinta daugiau nei 200 bendruomenių projektų." }
            ].map((proj, index) => (
              <div className="col" key={index}>
                <div className="card h-100 shadow-sm">
                  <img src={proj.img} className="card-img-top" alt={proj.title} />
                  <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title">{proj.title}</h5>
                    <p className="card-text">{proj.text}</p>
                    <div className="mt-auto">
                      <button className="btn btn-primary mb-2" onClick={() => showMoreInfo(proj.title)}>Daugiau informacijos</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reviews-section mt-5">
          <h3 className="text-center mb-4">Atsiliepimai</h3>
          <form className="review-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Jūsų vardas:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Įveskite vardą"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Atsiliepimas:</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Įveskite atsiliepimą"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              {editId !== null ? 'Atnaujinti atsiliepimą' : 'Pateikti atsiliepimą'}
            </button>
          </form>

          <ul className="mt-4">
            {reviews.map((r) => (
              <li key={r.id}>
                <strong>{r.name}</strong>: {r.comment}
                {' '}
                <button onClick={() => handleEdit(r)}>✏️ Redaguoti</button>
                <button onClick={() => handleDelete(r.id)}>❌ Ištrinti</button>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p>© 2025 Darija2002. Visos teisės saugomos.</p>
      </footer>
    </div>
  );
}

export default Projects;
