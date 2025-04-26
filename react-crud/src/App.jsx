import React from 'react';
import styled from 'styled-components';

const App = ({ className }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [gender, setGender] = React.useState('');

  const [editIndex, setEditIndex] = React.useState(null);

  // state data users
  const [users, setUsers] = React.useState([]);

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setGender('');
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    // Input validation alert :
    // alert('All input must be filled !');
    if (!name.trim() || !email.trim() || !phone.trim() || !gender.trim()) {
      alert('All input must be filled !');
      return;
    }

    // Email validation alert :
    // alert('Email is already used !');
    const emailExists = users.some(
      (user, idx) => user.email === email && idx !== editIndex
    );
    if (emailExists) {
      alert('Email is already used !');
      return;
    }

    const newUsers = { name, email, phone, gender };

    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = newUsers;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, newUsers]);
    }

    resetForm();
  };

  const onResetForm = (e) => {
    e.preventDefault();

    resetForm();
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, idx) => idx !== index);
    setUsers(updatedUsers);

    if (editIndex === index) {
      resetForm();
      setEditIndex(null);
    }
  };

  const handleEditUser = (index) => {
    const user = users[index];
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setGender(user.gender);
    setEditIndex(index);
  };

  return (
    <>
      <div className={className}>
        <h1>Users</h1>
        <form onSubmit={onSubmitForm} onReset={onResetForm}>
          <div className="form-group">
            <label>Name :</label>
            <input
              aria-label="name-input"
              type="text"
              placeholder="User Example"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email :</label>
            <input
              aria-label="email-input"
              type="email"
              placeholder="username@example.com"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone :</label>
            <input
              aria-label="phone-input"
              type="tel"
              placeholder="081123123123"
              className="form-control"
              value={phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\*$/.test(value)) {
                  setPhone(value);
                }
              }}
            />
          </div>
          <p>Gender : </p>
          <select
            aria-label="gender-input"
            className="form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Pick a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <div className="button-group">
            <button className="btn btn-secondary" type="reset">
              Clear
            </button>
            <button className="btn btn-secondary" type="submit">
              {editIndex !== null ? 'Save' : 'Create'}
            </button>
          </div>
        </form>
        <br />
        <table aria-label="table-output">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users, idx) => (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.phone}</td>
                <td>{users.gender}</td>
                <td className="action-buttons">
                  <button
                    className="btn btn-success btn-edit"
                    onClick={() => handleEditUser(idx)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-delete"
                    onClick={() => handleDeleteUser(idx)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default styled(App)`
  margin: 100px auto;
  width: 470px;

  input,
  select {
    margin-bottom: 10px;
    display: block;
    width: 100%;
  }

  table,
  th,
  td {
    border: 1px solid black;
  }

  table {
    width: calc(100%);
    border-collapse: collapse;
  }

  td:not(:first-child) {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    margin-bottom: 2px;
  }

  .button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    button {
      width: 100px;
      height: 35px;
      cursor: pointer;
    }
  }

  select:invalid {
    color: #666;
  }
  select.grey {
    color: grey;
  }
  option[value=''][disabled] {
    color: grey;
  }
  option {
    color: #000;
  }

  td.action-buttons {
    text-align: center;
    padding: 3px 0px;
    max-width: initial;
    button {
      cursor: pointer;
      margin: 0px 3px;
    }
  }
`;
