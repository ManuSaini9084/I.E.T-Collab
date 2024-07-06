import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuyerCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you store the token in localStorage after login
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get('http://localhost:5000/api/buyer/cart', config);
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);

  const handleDeleteCartItem = async (cartItemId) => {
    try {
      const token = localStorage.getItem('token'); // Assuming you store the token in localStorage after login
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`http://localhost:5000/api/buyer/cart/${cartItemId}`, config);
      setCartItems(cartItems.filter((item) => item._id !== cartItemId));
      toast.success('Product removed from cart successfully', {
        position: 'top-right',
      });
    } catch (error) {
      console.error('Error deleting cart item:', error);
      toast.error('Failed to remove product from cart', {
        position: 'top-right',
      });
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">Buyer Cart</h1>
      <div className="w-1/3 border-b-2 border-black mt-2"></div>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div key={item._id} className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col relative">
              <img
                src={`http://localhost:5000/${item.productId.image}`}
                alt={item.productId.name}
                className="h-40 w-full object-contain mb-4 rounded-md"
              />
              <h2 className="text-lg font-semibold">{item.productId.name}</h2>
              <p className="text-gray-700">{item.productId.description}</p>
              <p className="text-indigo-500 font-bold">${item.productId.price}</p>
              <button
                className="mt-auto px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition absolute bottom-4 right-4"
                onClick={() => handleDeleteCartItem(item._id)}
              >
                <FontAwesomeIcon icon={faTrash} className="mr-2" />
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default BuyerCart;
