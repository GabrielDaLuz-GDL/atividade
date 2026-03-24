import styled from 'styled-components'; 
import {useState,useContext} from 'react';
import {AgeContext} from '../context/ageContext';
import {Link} from 'react-router-dom';

const Titulo = styled.h1`
text-align: center;
color: ${(props) => props.cortexto};
`
const Rodape = styled.footer`
  background-color: ${(props) => {
    const cores = {
      preto: 'black',
      branco: 'white',
      vermelho: 'red',
      azul: 'blue',
      verde: 'green',
      thiago: 'black'
    };

    return cores[props.corFundo?.toLowerCase()] || props.corFundo;
  }};
  padding: 20px;
`;
const Input = styled.input`
padding : 8px;
height : 40px;
width : 220px;  
border : 2px solid black; 
border-radius : 8px;  
background-color : yellow;
`

function Footer() {

    const [cor,setCor] = useState('');
    const [cortexto,setCortexto] = useState('');  
    const [texto,setTexto] = useState('Olá, Gabriel da Luz');
    const {age,setAge} = useContext(AgeContext);

    return(
        <Rodape corFundo={cor}>
            <Titulo cortexto={cortexto}>{texto} {age}</Titulo>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/Profile">Profile</Link>
              <Link to="/Contact">Contact</Link>
            </nav>
            <Input type="text" value={cor} onChange={(e) => setCor(e.target.value)} placeholder='Digite a cor do fundo do texto'/>
            <Input type="text" value={cortexto} onChange={(e) => setCortexto(e.target.value)} placeholder='Digite a cor do texto'/>
            <Input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder='Digite o texto do titulo'/>
        </Rodape> 
    )

}

export default Footer;