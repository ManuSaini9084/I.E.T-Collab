import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Buyer = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleBuyProduct = async (productId) => {
    try {
      const token = localStorage.getItem('token'); // Assuming you store the token in localStorage after login
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(`http://localhost:5000/api/buyer/cart/${productId}`, {}, config);
      toast.success('Product added to cart successfully', {
        position: 'top-right',
      });
    } catch (error) {
      console.error('Error adding product to cart:', error);
      toast.error('Failed to add product to cart', {
        position: 'top-right',
      });
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white border-2 border-fray-200 rounded-xl shadow-md space-y-4 mb-5 relative">
      <h1 className="text-2xl font-bold text-center">Available Products</h1>
      
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 border border-gray-300 rounded-md "
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <FontAwesomeIcon icon={faSearch} className="text-gray-400 mx-2" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product._id} className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col relative">
            <img
              src={`http://localhost:5000/${product.image}`}
              alt={product.name}
              className="h-40 w-full object-contain mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-indigo-500 font-bold">${product.price}</p>
            <button
              className="mt-auto px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
              onClick={() => handleBuyProduct(product._id)} // Pass productId
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Buy
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Buyer;
