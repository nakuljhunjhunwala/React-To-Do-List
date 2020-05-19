import React, { useState } from "react";
import ToDoList from "./ToDoList"
import InputArea from "./InputArea"

function App() {
  const [inputArea, setInputArea] = useState("");
  const [list, setList] = useState(["list 1", "list 2"]);

  function inputHandler(event) {
    const data = event.target.value;
    setInputArea(data);
  }


  function buttonHandler(event) {

    setList(function(pre) {
      return [...pre, inputArea];
    });
setInputArea("");
  }

function deleteItem(id) {
  setList(
    prev => {
      return prev.filter(
        (item , index) => {
          return index != id
        }
      )
    }
  )
}



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

        <InputArea onChanged={inputHandler} value={inputArea} buttonClick={buttonHandler}/>
      
      <div>
        <ul>
        {list.map((slist, index) => {
          return <ToDoList key={index} onChecked={deleteItem} id={index} list={slist}/>;
        })}

        </ul>
      </div>
    </div>
  );
}

export default App;
