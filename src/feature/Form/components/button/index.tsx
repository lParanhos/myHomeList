import React from 'react';

import {ButtonWrapper, ButtonText} from './styles';

interface Props {
  text: string;
  color?: 'orange' | 'default';
  onPress?: () => void;
}

const Button: React.FC<Props> = ({text, onPress, color}: Props) => {
  return (
    <ButtonWrapper onPress={onPress} color={color}>
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
