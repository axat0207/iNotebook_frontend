import React, { useState,useContext } from 'react'
import NoteContext from '../context/NoteContext';
const AddNote = () => {
  const {addNote}  = useContext(NoteContext)
   
  const [title,setTitle] = useState();
  const [description,setDescription] = useState();



  const handleClick = (e)=>{
    e.preventDefault();
    if(localStorage.getItem('token')!==""){
      addNote(title,description,"Default");
      console.log("handle click function called");
    }else{
      alert("Please Login to Add notes")
    }
   
  }

  return (
    <div className='lg:mx-64 px-10 pt-5 lg:pt-10 '>
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input onChange={(e)=>setTitle(e.target.value)} type="text" id="title" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
<label htmlFor="message" className="block mb-2  font-medium text-gray-900 dark:text-white">Write Something Intresting</label>
<textarea onChange={(e)=>setDescription(e.target.value)} id="description" name='description' rows="7" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
<button onClick={handleClick} type="submit" className=" mt-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
       Publish post
   </button>
    </div>
  )
}

export default AddNote