import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import {AiOutlineInstagram } from "react-icons/ai";
// import noteContext from '../Context/notes/noteContext';

const About = () => {
  return (
    <>
      <header>
        <h1 className="about-head">About us</h1>
      </header>
      <div className="about-des">
        
        <h2>1. Introduction</h2>
        <p>
Welcome to the Note Taking Web Application documentation. This application allows users to create an account, sign in securely, and manage their notes online. The application ensures the confidentiality and integrity of user data through robust security measures.
        </p>

      
<h2>2. Getting Started</h2>
<h3>Creating an Account</h3>
<ul>
  <li>Navigate to the application's website.</li>
  <li>Click on the "Sign Up" button.</li>
  <li>Fill in the required information, including your name, email address, and a strong password.</li>
  <li>Click "Submit" to create your account.</li>
</ul>

<h3>Signing In</h3>
<ul>
  <li>Visit the application's website. </li>
  <li>Click on the "Log In" button.</li>
  <li>Enter your registered email address and password.</li>
  <li>Click "Log In" to access your account.</li>
</ul>

<h2>3. Using the Application</h2>
<h3>Dashboard</h3>
After signing in, you will be directed to the dashboard. The dashboard serves as the main hub for managing your notes.

<h3>Adding a Note</h3>
<ul>
  <li>In dashboard new note template will appear, allowing you to enter a title and the note's content.</li>
  <li>Click "Add" to add the note to your collection.</li>
</ul>

<h3>Viewing and Editing Notes</h3>
<ul>
  <li>From the dashboard, you will see a list of your saved notes.</li>
  <li>To edit the note, click on the "Edit" button within the note view.</li>
  <li>After making changes, remember to click "Save" to update the note.</li>
</ul>

<h3>Deleting Notes</h3>
<ul>
  <li>On the dashboard, locate the note you want to delete.</li>
<li> Click on the "Delete" button associated with the note.</li>
</ul>


<h2>4. Security</h2>
<ul>
  <li>User accounts are protected by a strong authentication mechanism.</li>
  <li>Passwords are hashed and stored securely, ensuring that even the application administrators cannot access your actual password.</li>
</ul>

<h2>7. Conclusion</h2>
<p>
<b>Congratulations!</b> You are now familiar with the features and functionalities of our Note Taking Web Application. Start creating, organizing, and managing your notes securely and efficiently. Thank you for choosing our application to meet your note-taking needs.
</p>

      </div>
      <footer>
        <div className="social-media">
          <Link
            to="https://www.linkedin.com/in/siddharth-rohan-279385239/"
            target="_blank"
          >
            <AiFillLinkedin size={30} style={{color: "#435cb6"}}></AiFillLinkedin>
          </Link>
        </div>
        <div className="social-media">
          <Link
            to="https://github.com/isidrohan"
            target="_blank"
          >
            <AiFillGithub size={30} style={{color: "#433e3e"}}></AiFillGithub>
          </Link>
        </div>
        <div className="social-media">
          <Link
            to="https://www.instagram.com/isidd_rohan/"
            target="_blank"
          >
            <AiOutlineInstagram size={30} style={{color: "#e13972"}}></AiOutlineInstagram>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default About;
