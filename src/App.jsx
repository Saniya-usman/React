import React from 'react'
import Student from './Student';
import Counter from './Counter';
import Lists_keys from './Lists_keys';
import HandleEvent from './HandleEvent';
import InputFocus from './InputFocus';
function App() {
  const name = "saniya";
  return (
    <>
    {/* <div>
    <h1>Hello {name}</h1>
    </div> */}
    <Student name="Saniya"/>
    <Counter/>
    <Lists_keys/>
    <InputFocus/>
    </>
  )
}

export default App
