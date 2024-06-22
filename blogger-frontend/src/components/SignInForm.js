import React, { useState } from 'react';
// import axios from 'axios';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
    //   const response = await axios.post('/api/signin', { email, password });
    //   localStorage.setItem('token', response.data.token);
      alert('Signed in successfully!');
      // Optionally, redirect to home page or other protected routes
    } catch (error) {
    //   alert(error.response.data.error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group mt-4 p-2">
          <label>Email:</label>
          <input type="email" className="form-control w-50 mx-auto" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group mt-4 p-2">
          <label>Password:</label>
          <input type="password" className="form-control w-50 mx-auto" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary mt-2 p-2">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;