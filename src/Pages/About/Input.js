import React, { useState } from 'react';


const Input = ({ onAdd }) => {
  const [text, setText] = useState("");
  // const [name, setName] = useState("");
  // const [headingText, setHeading] = useState("");

  // function handleChange(event) {
  //     console.log(event.target.value);
  //     setName(event.target.value);
  //   }

  // function handleClick(event) {
  //     setHeading(name);

  //     event.preventDefault();
  //   }

  return (
    // <div className="container">
    // <form onSubmit={handleClick}>
    // <input
    //   onChange={handleChange}
    //   type="text"
    //   placeholder="What's your task?"
    //   value={name}
    // />
    // </form>

    // </div>
    
      <div id="input" className="flex flex-row justify-between place-items-center drop-shadow-2xl m-5">
        <input
          className="rounded-lg p-5"
          type="text" value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={"Enter the task...."}
        />
        <div className='w-10'></div>
        <div onClick={() => onAdd(text)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
      </div>
    

  );
};

export default Input;