import React from 'react'
import { useState } from 'react'
import styled from "styled-components";

const Button = styled.button`
  background: pink;
  color: white;
  padding: 10px;
`;

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h2>{count}</h2>
        <Button onClick={() => setCount(count + 1)}>
            Increase
        </Button>
    </div>
  )
}

export default Counter