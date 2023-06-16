import React,{useContext, useEffect} from 'react'
import NoteContext from '../context/NoteContext'
import NoteItem from './NoteItem';
const Notes = () => {
    const {notes,readNotes} = useContext(NoteContext);
    useEffect(() => {
      readNotes()
    }, [])
    
  return (
    <div className="bg-gray-900 ">
    <h2 className='text-3xl text-blue-400 mt-10 lg:mt-4 font-bold text-center'>You Notes</h2>
    <div className=" mx-2"> 
    {notes.length===0 && 'No notes to display'}
    </div>
    <div className='flex justify-center flex-wrap lg:mx-20'>
    {notes.map((note) => {
        return <NoteItem key={note._id} id={note._id} title={note.title} desc={note.description} />
    })}
    </div>
</div>
  )
}

export default Notes