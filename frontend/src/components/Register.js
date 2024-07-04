import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { ...formData, role: 'student' });
      alert(res.data.message); 
      navigate('/login'); 
    } catch (err) {
      if (err.response && err.response.status === 400) {
        if (err.response.data.message === 'User already exists') {
          setErrorMessage('User with this email already exists');
        } else {
          setErrorMessage('Password must be at least 8 characters long and contain letters, numbers, and special characters.');
        }
      } else {
        console.error(err);
        setErrorMessage('Error registering user');
      }
    }
  };

  return (
    <div className="flex items-center  justify-center ">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-12 py-10 w-full max-w-lg border-2 border-gray-300">
        <h2 className="text-2xl mb-4 text-center">Register</h2>
        {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-black  mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-700 hover:bg-green-400 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
          <Link
            to="/login"
            className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-400"
          >
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
