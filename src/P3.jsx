import React, { useState } from 'react';
import "./P3.css";

const Users = () => {
  // Initial mockData
  const mockData = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no' },
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
  ];

  // useState for å lagre listen over brukere
  const [users, setUsers] = useState(mockData);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');

  // Funksjon for å legge til en ny bruker
  const addUser = () => {
    if (newUsername && newEmail) {
      const newUser = { username: newUsername, email: newEmail };
      setUsers([...users, newUser]); // Legger til den nye brukeren i listen
      setNewUsername(''); // Tømmer inputfeltet for brukernavn
      setNewEmail(''); // Tømmer inputfeltet for e-post
    }
  };

  return (
    <div className="users-container">
      <h1>Brukerliste</h1>

      {/* Visning av brukere */}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.username}</strong> - {user.email}
          </li>
        ))}
      </ul>

      {/* Input-felt for brukernavn */}
      <input
        type="text"
        placeholder="Brukernavn"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />

      {/* Input-felt for e-post */}
      <input
        type="email"
        placeholder="E-post"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />

      {/* Knapp for å legge til ny bruker */}
      <button onClick={addUser}>Legg til bruker</button>
    </div>
  );
};

export default Users;
