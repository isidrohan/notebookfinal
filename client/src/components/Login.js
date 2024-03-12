import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import image1 from "./image-1.webp";



const Login = () => {
  // *** useHistory hook is changed in v6, useHistory is now useNavigate
  // let history = useHistory();
  const navigate = useNavigate()

  const [credential, setCredential] = useState({ email: "", password: "" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch(`http://localhost:5000/api/auth/login`, {
    const response = await fetch(`${window.location.origin}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credential.email, password: credential.password })
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      // save the auth token then redirect
      localStorage.setItem('token', json.authToken)
      // history.push('/');
      navigate('/')

    }
    else {
      toast.error("enter valid cradentials", {
        position: "top-center",
        theme: "light"
      })
    }

  }
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="app-login">
        <div className="overlay-login">
          <img className="image1" src={image1} alt="" />
          <div className="container-login">
            <div className="title-login">
              <h2>log in?</h2>
            </div>
            <div className=" login">
              <form action="" onSubmit={handleSubmit}>
                <div className=" text-field email">
                  <div className="icon">
                    <FaRegUser ></FaRegUser>
                  </div>
                  <input type="email" name="email" id="email" placeholder="Enter email" value={credential.email} onChange={onChange} autoComplete="email"
                    required />

                </div>
                <div className="text-field password">
                  <div className="icon">
                    <RiLockPasswordLine ></RiLockPasswordLine>
                  </div>
                  <input type="password" name="password" id="password" placeholder="Password" value={credential.password} onChange={onChange} autoComplete="current-password"
                    required />
                </div>
                <button className="btn-login">Submit</button>
              </form>
            </div>
            <div className="signup">
              Don't have an account? <a href="/signup" style={{ textDecoration: "none" }}>Sign up</a>

            </div>
          </div>
       
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
