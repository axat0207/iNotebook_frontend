import React, { createContext, useState } from "react";
import NoteContext from './NoteContext'

const NoteState = (props) => {
  

  const initialNotes = [
    {
      "_id": "6486ee4e2de30c3b928a",
      "user": "6486edef023e2de30c3b9288",
      "title": "Demo",
      "description": "Will show to all",
      "tag": "bath kr lo",
      "date": "2023-06-12T10:06:59.299Z",
      "__v": 0
    },
  ]
  
  const [notes,setNotes] = useState(initialNotes);
  const readNotes = async()=>{
    const response = await fetch(
      'https://inotebookbackend-7pt4.onrender.com/api/notes/fetchallnotes',
      {
        method: 'GET',
        headers: {
          "Content-Type" : "application/json",
          "auth-token" : localStorage.getItem('token')
        }
      }
    );
    const data = await response.json(); // Extracting data as a JSON Object from the response
  // console.log(data)
  setNotes(notes.concat(data));
  }
  const deleteNote=async(id)=>{
    // console.log("deleting Note with "+ id)
    // let newNotes = notes.filter((note)=>{return note._id!==id})
    // setNotes(newNotes)
    const response = await fetch(
      `https://inotebookbackend-7pt4.onrender.com/api/notes/deletenote/${id}`,
      {
        method: 'DELETE',
        headers: {
          "Content-Type" : "application/json",
          "auth-token" : localStorage.getItem('token')
        },
       
      }
    );
    // const data = await response.json(); // Extracting data as a JSON Object from the response
    // window.location.reload();
  // console.log(data)
  // setNotes(notes.concat(data));
  const json = response.json(); 
  const newNotes = notes.filter((note) => { return note._id !== id })
  setNotes(newNotes)
   

  }
  const updateNote=async(id,title,description,tag)=>{
    // console.log(id,title,description,tag);
    
      const response = await fetch(`https://inotebookbackend-7pt4.onrender.com/api/notes/updatenote/${id}`,
      {
        method: 'PUT',
        headers: {
          "Content-Type" : "application/json",
          "auth-token" : localStorage.getItem('token')
        },
        body: JSON.stringify({title,description,tag}),
       
      }
    );
    // Extracting data as a JSON Object from the response
    const json = await response.json(); 

    let newNotes = JSON.parse(JSON.stringify(notes))
   // Logic to edit in client
   for (let index = 0; index < newNotes.length; index++) {
     const element = newNotes[index];
     if (element._id === id) {
       newNotes[index].title = title;
       newNotes[index].description = description;
       newNotes[index].tag = tag; 
       break; 
     }
   }  
   setNotes(newNotes);
      

  }
  const addNote = async(title,description,tag)=>{
   
      const response = await fetch(
        'https://inotebookbackend-7pt4.onrender.com/api/notes/addnote',
        {
          method: 'POST',
          headers: {
            "Content-Type" : "application/json",
            "auth-token" : localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,tag}),
        }
      );
      const data = await response.json(); // Extracting data as a JSON Object from the response
      
    // console.log(data)
    setNotes(notes.concat(data));
  }
  return (
    <NoteContext.Provider value={{notes,readNotes,addNote,deleteNote,updateNote}}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;