import React from 'react';
import {Feather} from '@expo/vector-icons';

import {FloatingActionButtonContainer} from './styles';

interface Props {
  onPress: () => void;
}

const FloatingActionButton: React.FC<Props> = ({onPress}) => {
  return (
    <FloatingActionButtonContainer onPress={onPress}>
      <Feather name="plus" size={24} color="white" />
    </FloatingActionButtonContainer>
  );
};

export default FloatingActionButton;
