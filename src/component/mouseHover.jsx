import React from 'react'
// import { useState } from 'react';
import counterHOC from './counterHOC';

const MouseHover = (props) => {
// const [counter,setCounter] = useState(0);
// const handleCounterIncrement = () => setCounter(counter+1);

const { counter , handleIncrement } = props;

  return (

    <>
      <h1>Mouse Hover: {counter}</h1>
      <h1 onMouseOver={handleIncrement}>Mouse Hover</h1>
    </>
    
  )
}

const EnhancedMouseHover = counterHOC(MouseHover,2);


export default EnhancedMouseHover;