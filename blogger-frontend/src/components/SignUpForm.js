import React, { useState } from 'react';
// import axios from 'axios';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
    //   const response = await axios.post('/api/signup', { email, password });
      alert(email,password);
      // Optionally, redirect to sign-in or home page
    } catch (error) {
    //   alert(error.response.data.error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group mt-4 p-2">
          <label>Email:</label>
          <input type="email" className="form-control w-50 mx-auto" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group mt-4 p-2">
          <label>Password:</label>
          <input type="password" className="form-control w-50 mx-auto" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary mt-2 p-2">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
