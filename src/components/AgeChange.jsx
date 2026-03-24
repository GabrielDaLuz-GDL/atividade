import react, {useState,useContext} from 'react';
import { AgeContext } from '../context/ageContext';
import styled from 'styled-components';


const Input = styled.input`
padding : 8px;
height : 40px;
width : 220px;  
border : 2px solid black; 
border-radius : 8px;  
background-color : yellow;
`


function AgeChange() {
    
    const {age,setAge} = useContext(AgeContext);

    return (
        <nav>
            <Input type="number" value={age} onChange={(e) => setAge(e.target.value)}  placeholder = 'Digite sua idade!'/>
        </nav>
    )

}

export default AgeChange;