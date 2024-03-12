import React, { useContext, useState, useRef, useEffect } from "react";
import "../css/Modal.css"
import Modal from "react-overlays/Modal";
import noteContext from '../Context/notes/noteContext'
import Noteitems from './Noteitems';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { CgCloseO } from "react-icons/cg";




const Notes = () => {
  const context = useContext(noteContext);
  const navigate = useNavigate()
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes()
    }
    else {
      navigate("/login")

    }
    // eslint-disable-next-line
  }, [])


  // React state to control Modal visibility
  const [showModal, setShowModal] = useState(false);

  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;
  var handleClose = () => setShowModal(false);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const ref = useRef(null)
  const refClose = useRef(null)

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }

  const handleClick = (e) => {
    console.log("updatedd the note", note)
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click();
    toast.success("Updated Successfully", {
      position: "top-center",
      theme: "light"
    })
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="modal-div">
        <div className="modal-example">
          <div>
            <button ref={ref} style={{ display: "none" }} className="modal-btn" type="button" onClick={() => setShowModal(true)}>
              Open Modal
            </button>
          </div>
        <div className="modal-container">
          <Modal
            className="modal"
            show={showModal}
            onHide={handleClose}
            renderBackdrop={renderBackdrop}
          >
            <div className="modal-box">
              <div className="modal-header">
                <div className="modal-title">Edit Note</div>
                <div>
                  <span className="close-button" onClick={handleClose}>
                    <CgCloseO></CgCloseO>
                  </span>
                </div>
              </div>
              <div className="modal-desc">
                <form action="">
                  <div className="modal-field title">
                    <label htmlFor="title">Title </label> <br />
                    <input

                      type="text"
                      id="etitle"
                      name="etitle"
                      onChange={onChange}
                      value={note.etitle} minLength={5} required

                    />
                  </div>
                  <div className="modal-field des">
                    <label htmlFor="description"> Description</label><br />
                    <textarea
                      rows="2" cols="30"
                      type="text"
                      id="edescription"
                      name="edescription"
                      onChange={onChange}
                      value={note.edescription} minLength={5} required
                    />
                  </div>
                  <div className="modal-field tag">
                    <label htmlFor="tag">Tag</label><br />
                    <input type="text" id="etag" name="etag" onChange={onChange} value={note.etag} minLength={5} required />
                  </div>

                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn-modal"
                  onClick={handleClose}
                  ref={refClose}
                >
                  Closee
                </button>
                <button
                  // ref={refClose}
                  disabled={note.etitle.length < 5 || note.edescription.length < 5}
                  className="btn-modal"
                  onClick={handleClick}
                >
                  Update note
                </button>
              </div>
              <ToastContainer />
            </div>
          </Modal>
          </div>
        </div>
      </div>
      {notes.length === 0 && <div className="nodata">No data to display</div>
        }
      <div className="noteitem-card">
        
      {
        notes.map((note) => {
          return (
            <Noteitems key={note._id} updateNote={updateNote} note={note}></Noteitems>)
        })
      }
    </div >
    </>

  )
}

export default Notes