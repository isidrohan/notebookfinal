import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import image1 from "./image-1.webp";

const Signup = () => {
  // *** useHistory hook is changed in v6, useHistory is now useNavigate
  // let history = useHistory();
  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password, cpassword } = credential;
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:5000/api/auth/create", {
    const response = await fetch(`${window.location.origin}/api/auth/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      // history.push('/login');
      navigate("/");
    } else {
      toast.error("enter valid cradentials", {
        position: "top-center",
        theme: "light",
      });
    }
  };
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
              <h2>new account?</h2>
            </div>
            <div className=" login">
              <form action="" onSubmit={handleSubmit}>
                <div className="text-field ">
                  <div className="icon">
                    <FaRegUser></FaRegUser>
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={onChange}
                    autoComplete="name"
                    required
                  />
                </div>
                <div className=" text-field email">
                  <div className="icon">
                    <AiOutlineMail></AiOutlineMail>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={onChange}
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="text-field password">
                  <div className="icon">
                    <RiLockPasswordLine></RiLockPasswordLine>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={onChange}
                    autoComplete="current-password"
                    minLength={5}
                    required
                  />
                </div>
                <div className="text-field cpassword">
                  <div className="icon">
                    <RiLockPasswordLine></RiLockPasswordLine>
                  </div>
                  <input
                    type="password"
                    name="epassword"
                    id="cpassword"
                    placeholder="Confirm Password"
                    onChange={onChange}
                    autoComplete="current-password"
                    minLength={5}
                    required
                  />
                </div>
                <button className="btn-login">Submit</button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
