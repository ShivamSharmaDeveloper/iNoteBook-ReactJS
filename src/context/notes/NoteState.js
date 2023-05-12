import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "645cdca823d5785bbf61663a",
      user: "645ca18184c15866ab5550e7",
      title: "My Tittle",
      description: "My First test note added.",
      tag: "test",
      date: "2023-05-11T12:16:40.139Z",
      __v: 0,
    },
    {
      _id: "645e364a85c013c8d36b060d",
      user: "645ca18184c15866ab5550e7",
      title: "My Second Tittle",
      description: "My Second test note added.",
      tag: "test",
      date: "2023-05-12T12:51:22.982Z",
      __v: 0,
    },
    {
      _id: "645e364a85c013c8d36b060d",
      user: "645ca18184c15866ab5550e7",
      title: "My Second Tittle",
      description: "My Second test note added.",
      tag: "test",
      date: "2023-05-12T12:51:22.982Z",
      __v: 0,
    },
    {
      _id: "645e364a85c013c8d36b060d",
      user: "645ca18184c15866ab5550e7",
      title: "My Second Tittle",
      description: "My Second test note added.",
      tag: "test",
      date: "2023-05-12T12:51:22.982Z",
      __v: 0,
    },
    {
      _id: "645e364a85c013c8d36b060d",
      user: "645ca18184c15866ab5550e7",
      title: "My Second Tittle",
      description: "My Second test note added.",
      tag: "test",
      date: "2023-05-12T12:51:22.982Z",
      __v: 0,
    },
    {
      _id: "645e364a85c013c8d36b060d",
      user: "645ca18184c15866ab5550e7",
      title: "My Second Tittle",
      description: "My Second test note added.",
      tag: "test",
      date: "2023-05-12T12:51:22.982Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{notes, setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
