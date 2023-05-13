import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "645cdca823d5785bbf61663a1",
      user: "645ca18184c15866ab5550e7",
      title: "My Tittle",
      description: "My First test note added.",
      tag: "test",
      date: "2023-05-11T12:16:40.139Z",
      __v: 0,
    },
    {
      _id: "645e364a85c013c8d36b060d2",
      user: "645ca18184c15866ab5550e7",
      title: "My Second Tittle",
      description: "My Second test note added.",
      tag: "test",
      date: "2023-05-12T12:51:22.982Z",
      __v: 0,
    },
    {
      _id: "645e364a85c013c8d36b060d3",
      user: "645ca18184c15866ab5550e7",
      title: "My Second Tittle",
      description: "My Second test note added.",
      tag: "test",
      date: "2023-05-12T12:51:22.982Z",
      __v: 0,
    },
    {
      _id: "645e364a85c013c8d36b060d4",
      user: "645ca18184c15866ab5550e7",
      title: "My Second Tittle",
      description: "My Second test note added.",
      tag: "test",
      date: "2023-05-12T12:51:22.982Z",
      __v: 0,
    },
    {
      _id: "645e364a85c013c8d36b060d5",
      user: "645ca18184c15866ab5550e7",
      title: "My Second Tittle",
      description: "My Second test note added.",
      tag: "test",
      date: "2023-05-12T12:51:22.982Z",
      __v: 0,
    },
    {
      _id: "645e364a85c013c8d36b060d6",
      user: "645ca18184c15866ab5550e7",
      title: "My Second Tittle",
      description: "My Second test note added.",
      tag: "test",
      date: "2023-05-12T12:51:22.982Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO: API Call
    console.log("Adding a New Note!")
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
  const editNote = (id, title, description, tag) => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
