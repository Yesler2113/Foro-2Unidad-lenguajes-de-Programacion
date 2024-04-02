
export const getNotes = () => {
    const notesString = localStorage.getItem('notes');
    return notesString ? JSON.parse(notesString) : [];
  };
  
  // Función para agregar una nueva nota al localStorage
  export const addNote = (newNote) => {
    const notes = getNotes();
    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  
  // Función para eliminar una nota del localStorage
  export const deleteNote = (id) => {
    const notes = getNotes();
    const updatedNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };
  