import { el } from 'date-fns/locale';
import React, { useState } from 'react';
import Item from '../About/Item';


const ToDoList = () => {
    const [openAdd, setOpenAdd] = useState(false);
    const [items, setItems] = useState([]);
  function onAdd(txt) {
if(txt!==""){
  const exist = items.find(el=>el.text===txt)
  // if(!exist){
  //   await setItems([...items, {text:txt, check: false}])

  // }else{
  //   await alert("The task is already in the list!")
  // }
  // await setOpenAdd(false);
}else{
  alert("Enter a title for your task!")
}
  }

  function onCheck(txt){

  }
    return (
        
            <div id="body" className="rounded-lg bg-indigo-500 h-5/6 w-5/12 drop-shadow-2xl max-w-xl m-5 items-center justify-between">
        <div id="title" className="m-5 text-center text-2xl font-bold text-white">
          <h1>To Do List</h1>
        </div>

        <div id="container" className="rounded-lg bg-white h-5/6 mx-5">
          <div id="commands" className="rounded-t h-1/6 w-6/6 flex justify-around">
            <button className="rounded m-1 w-full bg-indigo-700 text-white text-lg">Show Undone</button>
            <button className="rounded m-1 w-full bg-indigo-700 text-white text-lg"  onClick={() => setOpenAdd(true)}>Add New</button>
          </div>
          <div id="divideLine" className="w-full border-t border-b border-gray-300"></div>
          <div id="toDItems" className="overflow-y-scroll h-5/6 bg-white">
            {items.map((el)=>(<Item text={el.text} check={el.check} onCheck={onCheck} />))}
          </div>
        </div>
        <div className="text-center text-white font-bold">
          Be Productive
        </div>
      </div>
        
    );
};

export default ToDoList;