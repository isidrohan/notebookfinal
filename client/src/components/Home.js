import Notes from "./Notes";
// import home1 from "./home1.jpg";
// import home2 from "./home2.jpg";
import React, { useContext, useState} from "react";
import noteContext from "../Context/notes/noteContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "",
    description: "",
    tag: ""})
    toast.success("Note Added Successfully",{
      position: "top-center",
      theme: "light"
    })
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  
  return (
    <>
          
      <div className="app-home" >
        <div className="overlay-home">
          <div className="container">
            <div className="add-note">
              <h1>Add note</h1>
              <form action="">
                <div className="text-field title">
       
                  <input
                    placeholder="Add Title"
                    type="text"
                    id="title"
                    name="title"
                    onChange={onChange} value={note.title} 
                    minLength={5} required
                  />
                </div>
                <div className="text-field des">
         
                  <input
                  placeholder="Add Description"
                    type="text"
                    id="description"
                    name="description"
                    onChange={onChange} value={note.description}
                     minLength={5} required
                  />
                </div>
                <div className="text-field tag">
                 
                  <input placeholder="Add Tag" type="text" id="tag" name="tag" value={note.tag}  onChange={onChange} minLength={5} required />
                </div>
                <div className="btn">
                  <button className="btn-add" disabled={note.title.length<5 || note.description.length<5} onClick={handleClick}>add</button>
                </div>
              </form>
              </div>
            {/* your note section */}
            <div className="section your-note">
              <h1>Your Notes</h1>
            </div>
            <Notes></Notes>
           
          </div>
        </div>
        <ToastContainer />
      </div>
    
    </>
  );
};

export default Home;
