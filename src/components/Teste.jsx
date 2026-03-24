import { useState, useEffect } from 'react';
import styled from 'styled-components'; 


const Button = styled.button`
background-color:${(props) => (props.primary ? 'red' : 'blue')};
color: white;
padding: 10px 20px;
text-align: center;
text-decoration: none;
font-size: 20px;
cursor: pointer;
margin-right: 10px;
`;

const Counter = styled.p`
  font-size: 18px;
`;

function Teste() {
  const [count, setCount] = useState(0);
  const [cor,setCor] = useState(true);

  return (
    <div className='Teste'>
        <Counter>Você clicou {count} vezes</Counter>
        <Button primary={cor} onClick={() => setCount(count + 1)}>
        Contador +1
        </Button>
        <Button primary={cor} onClick={() => setCount(count - 1)}>
        Contador -1
        </Button>
        <Button onClick={() => setCor(!cor)}>
        Mudar cor
        </Button>
        
    </div>
  );
}

export default Teste;