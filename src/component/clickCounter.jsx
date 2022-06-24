import React from 'react'
// import { useState } from 'react';
import counterHOC from './counterHOC';

const ClickCounter = (props) => {
// const [counter,setCounter] = useState(0);
// const handleCounterIncrement = () => setCounter(counter+1);

const { counter , handleIncrement } = props;

  return (

    <>
      <h1>Click Counter: {counter}</h1>
      <button onClick={handleIncrement}>Click Counter</button>
    </>
    
  )
}

const EnhancedClickCounter = counterHOC(ClickCounter,2);


export default EnhancedClickCounter;