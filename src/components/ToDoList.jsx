import React , {useState} from "react";

function ToDoList(props) {

const [isDone , setIsDone] = useState(false);

  return (
 <li onClick={() => {
   props.onChecked(props.id);
 }}> {props.list} </li>
  )
}

export default ToDoList;
