
"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setSuccessMessage('Message has been sent successfully!');
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      message: '',
    }); // Clear the form
    setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <div id='contact'>
      <div className='w-full max-lg:min-h-0  min-h-screen flex justify-center items-center bg-gray-100'>
        {/* Contact container */}
        <div className='w-full lg:w-[95%] flex flex-col justify-center items-center gap-5 p-4'>
          {/* Header */}
          <div className='flex justify-center items-center gap-2 flex-wrap'>
            <span className='w-14 h-1 bg-yellow-600 hidden sm:block'></span>
            <h2 className='font-bold text-2xl lg:text-4xl uppercase text-center'>
              Request A Call Back
            </h2>
            <span className='w-14 h-1 bg-yellow-600 hidden sm:block'></span>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className='w-full text-center text-green-600 font-semibold'>
              {successMessage}
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className='w-full sm:w-[85%] md:w-[70%] lg:w-[60%] flex flex-col gap-5'
          >
            <div className='w-full flex flex-col justify-center items-center gap-5 p-4'>
              <input
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                placeholder='Full Name'
                className='w-full p-3 border border-gray-400 rounded-full outline-none'
                required
              />
              <input
                type='tel'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder='Phone Number'
                className='w-full p-3 border border-gray-400 rounded-full outline-none'
                required
              />
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email Address'
                className='w-full p-3 border border-gray-400 rounded-full outline-none'
                required
              />
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                cols="15"
                rows="5"
                placeholder='Message'
                className='w-full p-3 border border-gray-400 rounded-2xl outline-none'
                required
              ></textarea>
              <button
                type='submit'
                className='px-10 py-3 bg-[#FEC913] text-xl text-white rounded-full hover:bg-yellow-500 transition'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
