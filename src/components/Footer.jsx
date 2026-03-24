import styled from 'styled-components'; 
import {useState,useContext} from 'react';
import {AgeContext} from '../context/ageContext';
import {Link} from 'react-router-dom';
import {FooterContext} from '../context/footerContext';

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

const LinkRota = styled(Link)`
display : inline-flex;
padding : 20px;
margin-left : 10px;
width: auto;
text-decoration: none;
color : black;
font-size : 22px;
`

const NavRota = styled.nav`
background-color : lightgray;
display : flex;
justify-content: flex-end;
align-items : center;
`

function Footer() {

    const {cor,setCorcor,setCor, cortexto,setCortexto, texto,setTexto} = useContext(FooterContext);
    const {age,setAge} = useContext(AgeContext);

    return(
        <Rodape corFundo={cor}>
            <NavRota>
              <LinkRota to="/">Home</LinkRota>
              <LinkRota to="/Profile">Profile</LinkRota>
              <LinkRota to="/Contact">Contact</LinkRota>
              <LinkRota to="/About">About</LinkRota>
            </NavRota>
            <Titulo cortexto={cortexto}>{texto} Idade: {age}</Titulo>
            <Input type="text" value={cor} onChange={(e) => setCor(e.target.value)} placeholder='Digite a cor do fundo do texto'/>
            <Input type="text" value={cortexto} onChange={(e) => setCortexto(e.target.value)} placeholder='Digite a cor do texto'/>
            <Input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder='Digite o texto do titulo'/>
        </Rodape> 
    )

}

export default Footer;