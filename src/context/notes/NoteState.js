import { json } from "react-router-dom";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1Y2ExODE4NGMxNTg2NmFiNTU1MGU3In0sImlhdCI6MTY4Mzc5NDg4MX0.GBbZvxT9FOY-6Q6PsU6SC8pmeouGqk1NMLup_mkoqR0",
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  };
  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1Y2ExODE4NGMxNTg2NmFiNTU1MGU3In0sImlhdCI6MTY4Mzc5NDg4MX0.GBbZvxT9FOY-6Q6PsU6SC8pmeouGqk1NMLup_mkoqR0",
      },
      body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
    });

    console.log("Adding a New Note!");
    const note = {
      _id: "645e364a85c013c8d36b060d7",
      user: "645ca18184c15866ab5550e7",
      title: title,
      description: description,
      tag: tag,
      date: "2023-05-12T12:51:22.982Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {
    // TODO: API Call
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1Y2ExODE4NGMxNTg2NmFiNTU1MGU3In0sImlhdCI6MTY4Mzc5NDg4MX0.GBbZvxT9FOY-6Q6PsU6SC8pmeouGqk1NMLup_mkoqR0",
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects

    // Logic to exit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
