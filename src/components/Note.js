import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => {
            if (window.confirm("Do you really want to delete this note?")) {
              handleDeleteNote(id);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Note;
