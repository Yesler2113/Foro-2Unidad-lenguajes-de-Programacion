// src/pages/HomePage.jsx

import React, { useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (text) => {
    const newNote = { id: Date.now(), text };
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Gestor de Notas</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
};

export default HomePage;

