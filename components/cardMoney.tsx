import { useEffect, useState } from 'react';

import { api } from '../services/api';

import '../styles/cardMoney.css';

interface CardMoneyProps{
     de: string
     para: string
}

export function CardModey({ de, para }: CardMoneyProps){

    const [ result, setResult ] = useState(0);
    const [ moedaA, setMoedaA ] = useState(0);
    const [ resultFinal, setResultFinal ] = useState(0);

    async function handleConvertMoney(){
        const response = await api.get(`${de}-${para}/${moedaA}`);

        setResult(response.data[0].high);       
 
        setResultFinal(result * moedaA);
     }


    return(
        <>
           <h3>de { de }  para { para }</h3>
           <input type="number" name="moedaA" value={moedaA} onChange={(e)=>setMoedaA(e.target.value)} />
           <button onClick={handleConvertMoney}>Converter</button>
           <h4>{ resultFinal }</h4>
        </>
    )
}