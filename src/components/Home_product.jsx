// src/components/ProductCard.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const Home_product = ({ product }) => {
    let {flag} = useContext(UserContext)
    let navigation = useNavigate()
    function handleClick(){
        if(flag){
            navigation('/')
        }else{
           navigation('/login') 
        }
    }
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <img src={product.image} alt={product.title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">₹{product.price}</span>
          <button onClick={handleClick} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home_product;
