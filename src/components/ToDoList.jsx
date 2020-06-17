import React from "react";

function ToDoList(props) {

  return (
 <li onClick={() => {
   props.onChecked(props.id);
 }}> {props.list} </li>
  )
}

export default ToDoList;
