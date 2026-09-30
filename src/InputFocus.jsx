import React from 'react'
import { useRef } from 'react'


const InputFocus = () => {
    const inputRef = useRef();
  return (
   <>
    <input ref={inputRef} />
    <button onClick={() => inputRef.current.focus()}>Focus</button>
   </>
  )
}

export default InputFocus