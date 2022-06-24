import React , { useState } from 'react'

const counterHOC = (Component , value) => {

    const UpgradedComponent = () => {
        const [counter, setCounter] = useState(0);

        const handleIncrement = () => setCounter(counter+value);

        return <Component counter={counter} handleIncrement={handleIncrement}/>
    }
  return (
    UpgradedComponent
  )
}

export default counterHOC
