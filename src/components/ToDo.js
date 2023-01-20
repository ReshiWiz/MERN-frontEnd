import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
export default function ToDo({ text, updateModel, deleteToDo }) {
  return (
    <div className="todo">
      <div >{text}</div>
      <div className="icons">
        <AiFillEdit className="icon" onClick={updateModel}></AiFillEdit>
        <AiFillDelete className="icon" onClick={deleteToDo}></AiFillDelete>

        
      </div>
    </div>
  );
}
