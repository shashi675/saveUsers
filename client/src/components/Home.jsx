import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const url = "http://localhost:3001/api";

    const [wait, setWait] = useState(false);
    const [message, setMessage] = useState("");


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMessage("");
    setUser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setWait(true);
        await axios.post(url + "/createUser", user);
        setWait(false);
        setMessage("User details saved successfully.");
    } catch (error) {
        setMessage("Error occured while saving details. Please try again.");
    }
  };

  if(message !== "")
    return (
        <div className='my-4'>{message}</div>
    )
  
  else
    return (
        <div className='flex flex-col h-screen py-4 pl-2 my-2 shadow-2xl bg-pink-50 rounded'>
            <h1 className='text-2xl text-center font-bold'>Enter User Details</h1>
            <form onSubmit={handleSubmit}>
            <div className='pr-3 my-2'>
                <label>Name:</label>
                <input type="text" name="name" value={user.name} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1' />
            </div>
            <div className='pr-3 my-2'>
                <label>Email:</label>
                <input type="email" name="email" value={user.email} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1' />
            </div>
            <div className='pr-3 my-2'>
                <label>Phone:</label>
                <input type="number" name="phone" value={user.phone} onChange={handleInputChange} required className='border-2 border-black rounded ml-2 px-1' />
            </div>
            {wait && <div className='my-4'>Please wait...</div>}
            <button type="submit" className='bg-blue-700 text-white py-2 px-4 mt-4 rounded-md text-center mx-auto self-start'>subit details</button>
            </form>
        </div>
    );
};

export default Home;
