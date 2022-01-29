import React, { useState } from 'react';

import * as S from './styles';

import {Input} from '../../input/Input';
import { InputProps } from '../../input/type';

export function Home({
  type,
  placeholder,
  onChange,
  value,
  name
}: InputProps) {

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
