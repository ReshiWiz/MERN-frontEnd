import axios from "axios";

const URL = "https://mern-todo-list-7e82.onrender.com";

const getAllToDo = (setToDo) => {
  axios.get(URL).then(({ data }) => {
    console.log(data);
    setToDo(data);
  });
};
const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${URL}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((error) => console.log(error));
};

const upDateTodo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(`${URL}/update`, { _id: toDoId, text })
    .then((data) => {
      console.log(data);
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((error) => console.log(error));
};

const deleteListTo = (_id, setToDo ) => {
  axios
    .post(`${URL}/delete`, { _id })
    .then((data) => getAllToDo(setToDo))
    .catch((error) => console.log(`error wile deleting the Todo ${error}`));
};
export { getAllToDo, addToDo, upDateTodo , deleteListTo};
