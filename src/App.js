import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import UserTable from './components/UserTable';
import ModalForm from './components/ModalForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', age: '', status: 'active' });
  const [currentUserId, setCurrentUserId] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  // Load data from localStorage
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users'));
    if (savedUsers) {
      setUsers(savedUsers);
    }
    setSortConfig({ key: 'name', direction: 'ascending' });
  }, []);

  // Toggle modal form visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedUsers = users.map((user, index) =>
        index === currentUserId ? formData : user
      );
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setIsEditing(false);
    } else {
      const newUser = { ...formData };
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }

    // Close modal and reset form
    toggleModal();
    setFormData({ name: '', email: '', age: '', status: 'active' });
  };

  // Handle edit user
  const handleEdit = (index) => {
    const user = users[index];
    setFormData(user);
    setIsEditing(true);
    setCurrentUserId(index);
    toggleModal();
  };

  // Handle delete user
  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  // Handle sorting
  const handleSort = (column) => {
    let direction = 'ascending';
    if (sortConfig.key === column && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key: column, direction });

    const sortedData = [...users].sort((a, b) => {
      if (column === 'age') {
        return direction === 'ascending' ? a.age - b.age : b.age - a.age;
      } else if (column === 'status') {
        return direction === 'ascending'
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status);
      } else {
        return direction === 'ascending'
          ? a[column].localeCompare(b[column])
          : b[column].localeCompare(a[column]);
      }
    });

    setUsers(sortedData);
    localStorage.setItem('users', JSON.stringify(sortedData));
  };

  const getSortIconClass = (column) => {
    if (sortConfig.key === column) {
      return sortConfig.direction === 'ascending' ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={2} stroke="currentColor" className="size-4 inline-block">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
        </svg>
        ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={2} stroke="currentColor" className="size-4 inline-block">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
        </svg>
      );
    }
    return '';
  };

  return (
    <div>
      <NavBar />
      <div className="max-h-screen block rounded-lg bg-white m-10 p-10 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black">
        <div className="flex mb-6">
          <h1 className="flex-1 text-2xl font-medium leading-tight">User Data</h1>
          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
              toggleModal();
            }}
            className="inline-block rounded bg-dark px-6 pb-2 pt-2 text-sm font-medium leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:bg-dark-accent-300 hover:shadow-dark-2 focus:bg-dark-accent-300 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-dark-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            Tambah User 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 28" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

          </button>
        </div>
        {/* User Table */}
        <UserTable
          users={users} 
          handleEdit={handleEdit} 
          handleDelete={handleDelete} 
          handleSort={handleSort} 
          getSortIconClass={getSortIconClass}
        />
        {/* Modal */}
        {isModalOpen && (
          <ModalForm
            isEditing={isEditing} 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            toggleModal={toggleModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
