import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import InsertSpace from './components/InsertSpace/InsertSpace';
import DataSpace from './components/DataSpace/DataSpace';
import './App.css'

function App() {
    const [ cep, setCep] = useState('');
    const [ rua, setRua] = useState('');
    const [ cidade, setCidade] = useState('');
    const [ estado, setEstado] = useState('');
    const [ bairro, setBairro] = useState('');
    const getUser = async () => {
        
        const req = await fetch(`https://ws.apicep.com/cep/${cep}.json`);
        const res = await req.json();
        console.log(res)    
        const { address:logradouro, city:localidade, district:bairro, state:uf, status } = res 
        if(status === 200){
            setBairro(bairro) 
            setCidade(localidade)
            setRua(logradouro)
            setEstado(uf)
        }else{
            alert(`Cep ${cep} inválido`)
        }
    }

    useEffect(()=>{
        getUser()
    },[rua])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCep(e.target.value)
    }
    
    return(
        <div>
            <div className='container'>
                <Header title={'Cep Identifier'} />
                <InsertSpace
                    cepValue={cep}
                    handleCep={handleOnChange}
                />
                <button className='btn' onClick={getUser}>Buscar</button>
                {rua != '' &&
                    <DataSpace
                        estado={estado}
                        cidade={cidade}
                        bairro={bairro}
                        rua={rua}
                    />
                }
            </div>
        </div>
    );
      
}

export default App;
