// src/App.jsx

import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
    setLoading(false);
  }, []);

  const handleAddNote = (text) => {
    const newNote = { id: Date.now(), text };
    const updatedNotes = [...notes, newNote]; // Fusionar la nueva nota con las notas existentes
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Guardar las notas actualizadas en el localStorage
    setSelectedNote(null);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Actualizar las notas en el localStorage
  };

  const handleEditNote = (id, newText) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Actualizar las notas en el localStorage
    setSelectedNote(null);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 uppercase 
      text-rose-700  text-center transition-shadow animate-pulse">Gestor de Notas</h1>
      <NoteForm
        initialValues={selectedNote}
        onAddNote={handleAddNote}
        onEditNote={handleEditNote}
        buttonText={selectedNote ? 'Actualizar' : 'Agregar'}
      />
      <NoteList
        notes={notes}
        onDeleteNote={handleDeleteNote}
        onEditNote={setSelectedNote}
      />
    </div>
  );
};

export default App;






