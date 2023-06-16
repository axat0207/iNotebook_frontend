import React, { useContext } from "react";
// import Notes from './Notes'
import NoteContext from "../context/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import Notes from "./Notes";
import { Footer } from "flowbite-react";

const Home = () => {
  const {notes} = useContext(NoteContext);

  return (
    <div>
    <div className="bg-gray-900">
      <AddNote />
      <Notes/>
      
     </div>
     
     </div>
  );
};

export default Home;
