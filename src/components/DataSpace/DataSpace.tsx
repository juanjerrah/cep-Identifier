import React from 'react';
import * as C from './styleDataSpace'

type CepDataProps = {
    
    estado: string;
    cidade: string;
    rua: string;
    bairro: string;
}
export default function DataSpace({ estado, bairro, cidade, rua }: CepDataProps) {
  return(
      <div>
          <C.Container>
                <C.Content>Logradouro:
                    <p>{rua}</p>
                </C.Content>
                <C.Content>Bairro:
                    <p>{bairro}</p>
                </C.Content>
                <C.Content>Cidade:
                    <p>{cidade}-{estado}</p>
                </C.Content>
          </C.Container>
      </div>
  );
}
