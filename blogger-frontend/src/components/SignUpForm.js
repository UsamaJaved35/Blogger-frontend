import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    const response = await axios.post('http://localhost:5000/api/users/register', {username, email, password },{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 201) {
      navigate('/sign-in');
      alert(response.data.message || 'User Registered successfully!');
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
      <h2 className="mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp}>
      <div className="form-group mt-4 p-2">
          <label>Full Name:</label>
          <input type="text" className="form-control w-50 mx-auto" value={username} onChange={(e) => setUserName(e.target.value)} required />
        </div>
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
