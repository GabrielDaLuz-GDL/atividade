import react, {useState} from 'react';
import {FooterContext} from './footerContext';

export default function FooterProvider({children}) {

    const [cor,setCor] = useState('');
    const [cortexto,setCortexto] = useState('');  
    const [texto,setTexto] = useState('Olá, Gabriel da Luz');
        
    return (
        <FooterContext.Provider value = {{cor,setCor, cortexto,setCortexto, texto,setTexto}}>
            {children}
        </FooterContext.Provider>
    )
    
}