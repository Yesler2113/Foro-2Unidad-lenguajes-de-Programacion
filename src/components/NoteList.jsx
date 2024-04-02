// src/components/NoteList.jsx

import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDeleteNote, onEditNote }) => {
  const handleDeleteConfirmation = (id) => {
    const shouldDelete = window.confirm('¿Estás seguro de que deseas eliminar esta nota?');
    if (shouldDelete) {
      onDeleteNote(id);
    }
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} className="border rounded-lg p-4 mb-2 mt-8 bg-zinc-400">
            <Note
            key={note.id}
            note={note}
            onDelete={() => handleDeleteConfirmation(note.id)} // Utilizar handleDeleteConfirmation
            onEdit={() => onEditNote(note)}
            />
        </div>
      ))}
    </div>
  );
};

export default NoteList;




