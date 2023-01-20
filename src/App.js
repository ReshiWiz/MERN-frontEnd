import React, { useEffect, useState } from "react";

import "./App.css";
import ToDo from "./components/ToDo";
import { getAllToDo, addToDo, upDateTodo  , deleteListTo} from "./controller/TodoController";
// import { deleteToDo } from "../../server/controllers/Controller";
export default function App() {
  const [toDo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdated, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  const updateText = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };



  useEffect(() => {
    getAllToDo(setTodo);
  }, []);

  return (
    <div>
      <div className="container">
        <h1>To Do list</h1>
        <div className="top">
          <input
            type="text"
            placeholder="add Task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdated
                ? () =>
                    upDateTodo(toDoId, text, setTodo, setText, setIsUpdating)
                : () => addToDo(text, setText, setTodo)
            }
          >
            {isUpdated ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((items) => (
            <ToDo
              key={items._id}
              text={items.text}
              updateModel={() => updateText(items._id, items.text)}
              deleteToDo = {()=> deleteListTo(items._id,setToDoId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
// 9000
// 18000