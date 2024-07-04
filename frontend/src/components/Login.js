import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      const { token, role } = res.data;
      localStorage.setItem('token', token);
      if (role === 'student') {
        navigate('/student');
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      setError('Error logging in');
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-12 py-10 w-full max-w-lg border-2 border-gray-300">
        <h2 className="text-2xl mb-4 text-center">Log in to your account</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
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
          <label className="block text-black mb-2" htmlFor="password">
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
        <div className="flex items-center flex-col sm:flex-row justify-center sm:justify-between">
          <button
            className="bg-green-600 hover:bg-green-400 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <Link
            to="/register"
            className="mt-4 sm:mt-0 ml-0 sm:ml-4 inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-400"
          >
            Don't have an account? Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
