import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Seller = () => {
  const [product, setProduct] = useState({
    name: '',
    image: null,
    description: '',
    price: '',
    contact: '',
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setProduct({ ...product, image: e.target.files[0] });
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('image', product.image);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('contact', product.contact);

    try {
      await axios.post('http://localhost:5000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setProduct({ name: '', image: null, description: '', price: '', contact: '' });
      toast.success('Product added successfully', {
        position: 'top-right',
      });

    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Failed to add product', {
        position: 'top-right',
      });
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto border-2 border-green-400 bg-white rounded-xl shadow-md space-y-4 mb-10 relative">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold">Add Product</h1>
          <div className="w-1/2 border-b-2 border-black mt-2"></div>
        </div>
        <Link to="/iet-store/seller/cart" className="absolute top-0 right-0 mt-4 mr-4 text-gray-700 hover:text-gray-900">
          <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Product Image</label>
          <input
            name="image"
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-black-300  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="file"
            accept="image/*"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Product Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-black-300  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-black-300  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact Number</label>
          <input
            name="contact"
            value={product.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-black-300  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
        >
          Add Product
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Seller;
