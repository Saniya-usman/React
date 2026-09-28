import React from 'react'

const HandleEvent = () => {
  return (
    <>
    
    function handleClick(){
        alert("button clicked")
    }
    <button onClick={handleClick}></button>
    </>
  )
}

export default HandleEvent