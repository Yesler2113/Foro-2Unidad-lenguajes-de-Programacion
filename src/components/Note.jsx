import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from "react-icons/fa";


const Note = ({ note, onDelete, onEdit }) => {
  const handleDeleteClick = () => {
    onDelete(note.id);
  };

  const handleEditClick = () => {
    const newText = note.text;
    if (newText !== null) {
      onEdit(note.id, newText);
    }
  };

  return (
    <div className="border rounded-lg p-4 mb-2 bg-white shadow-md">
      <p className="mb-2">{note.text}</p>
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white 
          py-2 px-4 rounded-md mr-2" onClick={handleEditClick}>
            <FaEdit />
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white 
        py-2 px-4 rounded-md mr-2"onClick={handleDeleteClick}>
          <MdDelete />
        </button>
      </div>
      
    </div>
  );
};

export default Note;

