import React from 'react';
import {InputContainer, InputLabel, Input as CustomInput} from './styles';

interface Props {
  label: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const Input: React.FC<Props> = ({label, ...rest}) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <CustomInput {...rest} />
    </InputContainer>
  );
};

export default Input;
