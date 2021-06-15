import React from 'react';

import {
  InputContainer,
  InputLabel,
  InputWrapper,
  SearchIcon,
  Input as CustomInput,
} from './styles';

interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  showSearchIcon?: boolean;
}

const Input: React.FC<Props> = ({label, showSearchIcon, ...rest}) => {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <InputWrapper>
        {showSearchIcon && <SearchIcon />}
        <CustomInput {...rest} />
      </InputWrapper>
    </InputContainer>
  );
};

export default Input;
