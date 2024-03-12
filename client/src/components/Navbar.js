import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  const handlelogout = ()=>{
    localStorage.removeItem('token');
    navigate(0)

  }
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/about">About</Link>
          </li>
        </ul>
       
        {!localStorage.getItem('token') ?<form className="auth-button">
        <li className="nav-btn">
          <Link to="/login" role="button">Log in </Link>
        </li>
        <li className="nav-btn">
          <Link to="/signup" role="button">Sign up</Link>
        </li>
        </form>:<li className="nav-btn">
          <Link role="button" onClick={handlelogout}>Log out </Link>
        </li>}
       
        
      </nav>
    </>
  );
};

export default Navbar;
