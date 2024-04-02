import React, { useState, useEffect } from 'react';

const NoteForm = ({ initialValues, onAddNote, onEditNote, buttonText }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (initialValues) {
      setText(initialValues.text);
    } else {
      setText(''); // Limpiar el texto del formulario cuando se cambia de agregar a editar
    }
  }, [initialValues]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    if (initialValues) {
      onEditNote(initialValues.id, text); // Llamar a la función onEditNote si initialValues está definido
    } else {
      onAddNote(text); // Llamar a la función onAddNote si initialValues no está definido
    }
    setText('');
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="border rounded-lg p-2 mb-2 w-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-black"
        placeholder="añadir una nota..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <button className="bg-blue-500 hover:bg-blue-600 mt-0.5 text-white py-2 px-4 rounded-md  mx-auto" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default NoteForm;


