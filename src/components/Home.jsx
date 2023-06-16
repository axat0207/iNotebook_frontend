import React, { useContext } from "react";
// import Notes from './Notes'
import NoteContext from "../context/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import Notes from "./Notes";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const {notes} = useContext(NoteContext);

  return (
    <div>
     <Navbar/> 
    <div className="bg-gray-900">
      <AddNote />
      <Notes/>
      
     </div>
     <Footer/>
     </div>
  );
};

export default Home;
