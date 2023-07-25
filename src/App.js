import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const App = () => {
  const [users, setUsers] = useState([]);
  const [highlightedUser, setHighlightedUser] = useState(null);
  const [newUser, setNewUser] = useState('');

  const handleAddUser = () => {
    if (newUser !== '') {
      setUsers([...users, newUser]);
      setNewUser('');
    }
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleRandomize = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    setHighlightedUser(users[randomIndex]);
  };

  return (
    <div>
      <h1>React TardyTuesdays Volunteer Picker</h1>
      <div>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={handleAddUser}>Submit</button>
      </div>
      <br></br>
      <div>
        <button onClick={handleRandomize}>Randomize</button>
      </div>
      <hr></hr>
      <ul>
        {users.map((user, index) => (
          <li key={index} style={highlightedUser === user ? { fontWeight: 'bold' } : {}}>
            <FaTrash onClick={() => handleDeleteUser(index)} />
            &nbsp;&nbsp;&nbsp; {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
