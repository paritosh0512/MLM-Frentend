// src/components/ContactUs.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Address</h3>
              <p className="text-gray-600">5/229 A old Kanpur Kanpur City,  India</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">WhatsApp</h3>
              <p className="text-gray-600">+91 73553-97527</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email</h3>
              <p className="text-gray-600">paritoshTechxpert.in</p>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h3>
            <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.9537353159042!3d-37.8162797423211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775d6d7bcd1a16!2sE-commerce%20St%2C%20Shop%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1611815301234!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
