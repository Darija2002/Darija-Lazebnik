import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserTable() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:5000/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Klaida gaunant vartotojus:', err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`)
      .then(fetchUsers);
  };

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setForm({ firstName: user.firstName, lastName: user.lastName, email: user.email });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/users/${editingUser}`, form)
      .then(() => {
        fetchUsers();
        setEditingUser(null);
        setForm({ firstName: '', lastName: '', email: '' });
      });
  };

  return (
    <div>
      <h2>Vartotojų sąrašas</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Vardas</th>
            <th>Pavardė</th>
            <th>El. paštas</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Redaguoti</button>
                <button onClick={() => handleDelete(user.id)}>Ištrinti</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {editingUser && (
        <form onSubmit={handleUpdate}>
          <h3>Redaguoti vartotoją</h3>
          <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Vardas" required />
          <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Pavardė" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="El. paštas" type="email" required />
          <button type="submit">Išsaugoti</button>
        </form>
      )}
    </div>
  );
}

export default UserTable;
