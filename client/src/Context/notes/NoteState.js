import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = ({children}) =>{
  // const host = "http://localhost:5000"
  const initialNotes = [];
      const [notes, setNotes] = useState(initialNotes);

      // GET ALL NOTES a note 
      const getNotes = async()=>{
        // const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        const response = await fetch(`${window.location.origin}/api/notes/fetchallnotes`, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
        });
        const json =  await response.json(); 
        console.log(json)
        setNotes(json);
      }


      // ADD a note 
      const addNote = async(title,description,tag)=>{
        // const response = await fetch(`${host}/api/notes/addnote`, {
        const response = await fetch(`${window.location.origin}/api/notes/addnote`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,tag}), 
        });
        const note =  await response.json(); 
      setNotes(notes.concat(note))  
      }

      // DELETE a Note 
      const deleteNote = async(id)=>{
          const response = await fetch(`${window.location.origin}/api/notes/deletenote/${id}`, {
          // const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE", 
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem('token')
            },
          });
          const json =  await response.json(); 
          console.log(json)
          setNotes(json);

          console.log("the note is deleted"+id);
          const newNote = notes.filter((note)=>{
              return note._id!==id;
          })
          setNotes(newNote);
      }

      // EDIT a note
      const editNote = async(id,title,description,tag)=>{
        // const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        const response = await fetch(`${window.location.origin}/api/notes/updatenote/${id}`, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,tag})
        });
        const json = await response.json(); 
        console.log(json)

        let newNotes = JSON.parse(JSON.stringify(notes))
        // logic to edit in client
        for (let index = 0; index < notes.length; index++) {
          const element = newNotes[index];
          if(element._id===id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          } 
          
        }
        setNotes(newNotes)
        
      }

    return(
        <noteContext.Provider value={{notes , addNote, deleteNote,editNote,getNotes}}>
            {children}
        </noteContext.Provider>
    )
}

export default NoteState;


