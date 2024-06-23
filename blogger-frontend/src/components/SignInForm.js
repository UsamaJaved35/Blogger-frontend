import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignInForm = ({setIsSignedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        setIsSignedIn(true);
        alert(response.data.message || 'Signed in successfully!');
        navigate("/all-posts");
      } else {
        alert(response.data.message || 'Something went wrong');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message || 'Something went wrong');
      } else {
        alert('Something went wrong');
      }
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