import React , {useState} from "react";

function ToDoList(props) {

const [isDone , setIsDone] = useState(false);

function handleClick() {
  setIsDone(prev =>{
    return !prev;
  })
}

  return (
 <li onClick={handleClick} style={{textDecoration: isDone ? "line-through" : "none"}}> {props.list} </li>
  )
}

export default ToDoList;
