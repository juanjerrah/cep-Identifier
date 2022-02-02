import React from 'react';
import * as C from './StyleHeader'

type HeadProps = {
    title: string;
}

export default function Header({ title }: HeadProps) {
  return(
    <C.Head>
        <C.Text>{title}</C.Text>
    </C.Head>
  );
}
