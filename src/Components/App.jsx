import React, { useState } from "react";
import "./styles.css";
import Header from "./header";
import Note from "./Note";
import Footer from "./footer";
import CreateArea from "./CreateArea";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="page-container">
      <header>
        <Header />
      </header>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
