

  import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VolunteerForm from './VolunteerForm'; // 👈 Pridėta ši eilutė
import '../css/styles.css';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users');
      setUsers(res.data);
    } catch (err) {
      console.error('Klaida gaunant vartotojus:', err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.error('Klaida šalinant vartotoją:', err);
    }
  };

  return (
    <div>
      <header>
        <h1>Savanorystė Lietuvoje</h1>
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
          <h2>Kodėl verta savanoriauti?</h2>
          <p>...</p>
          <img src="/images/volunteering1.jpg" alt="Savanorystės veikla" />
        </section>

        {/* 👇 Naujas skyrius savanorio formai */}
        <section>
          <VolunteerForm />
        </section>

        <section className="statistics">
          <h2>Registruoti savanoriai (CRUD)</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Vardas</th>
                <th>Pavardė</th>
                <th>El. paštas</th>
                <th>Veiksmai</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => deleteUser(user.id)}>Ištrinti</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="gallery">
          <h2>Galerija</h2>
          <div className="gallery-container">
            <div className="gallery-track">
              <img src="/images/gallery1.jpg" alt="Galerijos paveikslėlis 1" />
              <img src="/images/gallery2.jpg" alt="Galerijos paveikslėlis 2" />
              <img src="/images/gallery3.jpg" alt="Galerijos paveikslėlis 3" />
              <img src="/images/gallery4.jpg" alt="Galerijos paveikslėlis 4" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Savanorystės komanda. Visos teisės saugomos.</p>
      </footer>
    </div>
  );
}

export default Home;
