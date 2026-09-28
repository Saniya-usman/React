import React from 'react'

const Lists_keys = () => {
    const fruits = ["apple", "banana", "mango"]
  return (
   <ul>
    {fruits.map((fruit, index)=>{
        <li key={index}>{fruit}</li>
    })}
   </ul>
  )
}

export default Lists_keys