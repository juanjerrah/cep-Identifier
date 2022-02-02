import React from 'react';
import * as C from './styleSpace'

type CepProps = {
    cepValue: string;
    handleCep: any
}

export default function InsertSpace({ cepValue, handleCep }: CepProps) {
  return (
      <>
        <C.Input type="text" name="cep" value={cepValue} onChange={handleCep} placeholder='Digite o Cep' autoComplete='off' />
        
      </>
  );
}
