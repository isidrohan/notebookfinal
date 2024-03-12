import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { toast } from 'react-toastify';

const Noteitems = (props) => {
  const context = useContext(noteContext);
  const { deleteNote} = context;
  const { note,updateNote } = props;
  return (
    <div className="card">
      <h2>{note.title}</h2>
      <p>{note.description} </p>
      <div className="icon">
      <MdDelete size={20} style={{ cursor: "pointer" }} onClick={() => {deleteNote(note._id); toast.success("Deleted",{position:"top-center"})}}></MdDelete>
      <BiEdit size={20} style={{ cursor: "pointer" }} onClick={()=>{updateNote(note)}}></BiEdit>
      </div>
    </div>
  );
};

export default Noteitems;
