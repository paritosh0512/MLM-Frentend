// src/components/AboutUs.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
        
        <div className="text-gray-700 leading-relaxed space-y-6">
          <p>
            Welcome to <span className="font-bold">E-Shop</span>, your number one source for all things [product, ie: electronics, fashion, etc.]. We're dedicated to providing you the very best of [product], with an emphasis on quality, customer service, and uniqueness.
          </p>

          <p>
            Founded in [year] by [founder name], E-Shop has come a long way from its beginnings in [starting location]. When [founder name] first started out, their passion for [brand message - e.g., "eco-friendly fashion", "affordable electronics"] drove them to start their own business.
          </p>

          <p>
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10">Our Mission</h3>
          <p>
            Our mission is to provide the best quality products at affordable prices, while offering excellent customer service and ensuring an enjoyable shopping experience for our customers.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10">Our Team</h3>
          <p>
            We are a small but passionate team of individuals who are dedicated to making your shopping experience with us as pleasant as possible. From our customer service representatives to our warehouse staff, each member of our team is committed to excellence.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-10">Our Values</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Quality: We believe in providing top-quality products that exceed our customers' expectations.</li>
            <li>Integrity: We are committed to honesty, transparency, and doing the right thing for our customers and employees.</li>
            <li>Customer Focus: Our customers are at the heart of everything we do. We strive to meet their needs and exceed their expectations.</li>
            <li>Innovation: We are always looking for new ways to improve our products and services.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
