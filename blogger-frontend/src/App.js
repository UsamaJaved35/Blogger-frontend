import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';
import Body from './components/Body';
import BlogPostForm from './components/BlogPostForm';
import PrivateRoute from './components/PrivateRoute';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Check if the user is signed in by checking the presence of a token in localStorage
    const token = localStorage.getItem('token');
    setIsSignedIn(!!token);
    // setIsSignedIn(false)
  }, []);
  return (
    <Router>
      <div className="App">
        <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}  />
        <Routes>
          <Route path="/" element={<Body isSignedIn={isSignedIn} />} />
          <Route path="/sign-in" element={<SignInForm setIsSignedIn={setIsSignedIn}/>}/>
          <Route path="/sign-up" element={<SignUpForm/>}/>
          <Route path="/all-posts" element={<PrivateRoute element={BlogList} isSignedIn={isSignedIn} filter="all-posts" />} />
          <Route path="/my-posts" element={<PrivateRoute element={BlogList} isSignedIn={isSignedIn} filter="my-posts" />} />
          <Route path="/create" element={<PrivateRoute element={BlogPostForm} isSignedIn={isSignedIn} />} />
          <Route path="/edit/:id" element={<PrivateRoute element={BlogPostForm} isSignedIn={isSignedIn} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
