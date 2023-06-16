import React,{useContext, useState} from "react";
import NoteContext from "../context/NoteContext";
const NoteItem = ({ id,title, desc }) => {
  const { deleteNote,updateNote } = useContext(NoteContext);
  const [newTitle,setNewTitle]=useState()
  const [newDesc,setNewDesc]=useState()
  const [newTag,setNewTag]=useState()
  const handleChange = (e)=>{
    e.preventDefault();
    updateNote(id,newTitle,newDesc,newTag);
  }
  return (
    <div className="lg:mx-32 lg:w-1/5 mx-10 mt-10">
      <div
        href="#"
        className=" bg-gray-600 w-fit px-5 py-4  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400"></p>

        <p className="text-right mt-2 text-lg text-gray-700  dark:text-gray-400">
          {/* // Delete Icon */}
          <i onClick={()=>deleteNote(id)} className="fa fa-eraser mx-3" />
          {/* // Update Icon */}
          <i
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            className="fa fa-pen-to-square"
          ></i>
        </p>

        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          //Update Modal
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  You can update Notes from Here
                </h3>
                <form className="space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="Title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      onChange={(e)=>{setNewTitle(e.target.value)}}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Update Title"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Updated Notes
                    </label>
                    <input
                      type="Description"
                      name="Description"
                      id="Description"
                      onChange={(e)=>{setNewDesc(e.target.value)}}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Update Description"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Tag"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tags
                    </label>
                    <input
                      type="Tag"
                      name="Tag"
                      id="Tag"
                      onChange={(e)=>{setNewTag(e.target.value)}}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="New Tag"
                      
                    />
                  </div>

                  <button
                    onClick={handleChange}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update Note
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
