import React, { useState } from 'react';

import * as S from './styles';

import {Input} from '../../components/input/Input';

export function Home() {

  const [nameField, setNameField] = useState('');

  return (
    <S.Container>
      <S.Form>
        <Input  
          name='nome'
          type='text'
          placeholder='Enter your name'
          value={nameField}
          onChange={(e) => setNameField(e.target.value)}
        />
        {console.log(nameField)}
      </S.Form>
    </S.Container>
  )
}
