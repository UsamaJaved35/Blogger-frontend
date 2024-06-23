import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Header = ({isSignedIn,setIsSignedIn}) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const navigate = useNavigate('')

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsSignedIn(false);
  };

    const toggleSignIn = () => {
        setShowSignIn(!showSignIn);
        setShowSignUp(false); // Ensure only one form is shown at a time
        navigate('/sign-in')
      };
    
      const toggleSignUp = () => {
        setShowSignUp(!showSignUp);
        setShowSignIn(false); // Ensure only one form is shown at a time
        navigate('/sign-up')
      };

  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#e3f2fd"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" style={{fontWeight:"bold",color:"black",cursor:"pointer"}} to="/">Blogger</Link>
    <button className="navbar-toggler" style={{color:"black",fontWeight:"8px"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     {isSignedIn ? (
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" style={{ fontWeight: "bold", color: "black",cursor:"pointer" }} to="/all-posts">All Blogs</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={{ fontWeight: "bold", color: "black",cursor:"pointer" }} to="/my-posts">My Blogs</Link>
        </li>
      </ul>
      <button className="btn btn-outline-danger" type="button" onClick={handleSignOut}>Sign Out</button>
      </div>
            ) : (
              <div className='mx-auto p-2'>
                <button className="btn btn-outline-success m-2 p-2" type="button" onClick={toggleSignIn}>Sign In</button>
                <button className="btn btn-outline-success m-2 p-2" type="button" onClick={toggleSignUp}>Sign Up</button>
            </div>
    )}
  </div>
</nav>
    </div>
  )
}

export default Header