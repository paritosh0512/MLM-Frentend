// src/components/ProductList.js
import React from 'react';
import Home_product from './Home_product';

const Home_product_price= () => {
  const accessories = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/989938/pexels-photo-989938.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Accessory 1',
      description: 'This is a short description of Accessory 1.',
      price: 19.99,
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Accessory 2',
      description: 'This is a short description of Accessory 2.',
      price: 29.99,
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/313719/pexels-photo-313719.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Accessory 3',
      description: 'This is a short description of Accessory 3.',
      price: 24.99,
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Accessory 4',
      description: 'This is a short description of Accessory 4.',
      price: 34.99,
    },
  ];

  const clothes = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Clothes 1',
      description: 'This is a short description of Clothes 1.',
      price: 49.99,
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Clothes 2',
      description: 'This is a short description of Clothes 2.',
      price: 59.99,
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Clothes 3',
      description: 'This is a short description of Clothes 3.',
      price: 54.99,
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Clothes 4',
      description: 'This is a short description of Clothes 4.',
      price: 64.99,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h2>

      <h4 className="text-xl font-semibold text-gray-700 mb-4">Accessories</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {accessories.map((product) => (
          <Home_product key={product.id} product={product} />
        ))}
      </div>

      <h4 className="text-xl font-semibold text-gray-700 mb-4">Clothes</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clothes.map((product) => (
          <Home_product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home_product_price;
