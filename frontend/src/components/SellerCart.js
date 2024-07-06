// frontend/src/components/SellerCart.js
import React, { useState, useEffect, Link } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const SellerCart = () => {
  const [sellerProducts, setSellerProducts] = useState([]);

  useEffect(() => {
    const fetchSellerProducts = async () => {
      try {
        // Replace with actual API endpoint to fetch seller's products
        const response = await axios.get('http://localhost:5000/api/seller/products'); 
        setSellerProducts(response.data);
      } catch (error) {
        console.error('Error fetching seller products:', error);
      }
    };
    fetchSellerProducts();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      // Replace with actual API endpoint to delete product
      await axios.delete(`http://localhost:5000/api/seller/products/${productId}`);
      setSellerProducts(sellerProducts.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Seller Products</h1>
        <div className="w-1/3 border-b-2 border-black mt-2"></div>
      </div>
      {sellerProducts.length === 0 ? (
        <p className="text-gray-700">You have no products listed.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sellerProducts.map((product) => (
            <div key={product._id} className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col relative">
              <img
                src={`http://localhost:5000/${product.image}`} 
                alt={product.name}
                className="h-40 w-full object-contain mb-4 rounded-md"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-indigo-500 font-bold">${product.price}</p>
              <div className="mt-auto flex justify-between items-center">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  <FontAwesomeIcon icon={faTrash} className="mr-2" />
                  Delete
                </button>
                <Link to={`/seller/products/${product._id}/edit`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  <FontAwesomeIcon icon={faEdit} className="mr-2" />
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerCart;
